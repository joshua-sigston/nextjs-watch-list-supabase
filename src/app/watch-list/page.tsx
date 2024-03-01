import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import React from 'react';
import WatchForm from '../components/WatchForm';
import WatchItem from '../components/WatchItem';

export default async function WatchList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  const { data: watches, error } = await supabase
    .from('watches')
    .select('*')
    .eq('user_id', user?.id)
    .order('brand', { ascending: true });

  if (error) {
    console.error('Error fetching watches');
  }

  // console.log({ watches });
  return (
    <div className="bg-zinc-200 min-h-screen p-5">
      <div className="flex justify-between items-center mb-3">
        Your WatchList
        <form action="/auth/signout" method="post">
          <button
            className="button block bg-orange-400 hover:bg-orange-500 px-3 py-1 rounded-md shadow-md"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </div>
      <div>
        <WatchForm />
      </div>
      <div className="mt-10 flex flex-col gap-3">
        {' '}
        {watches?.map((item, index) => (
          <WatchItem
            id={item.id}
            brand={item.brand}
            model={item.model}
            reference_number={item.reference_number}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
