'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function editWatch(formData: FormData) {
  const id = formData.get('id')
  const model = formData.get('model')
  const brand = formData.get('brand')
  const referenceNumber = formData.get('referenceNumber')
console.log(formData)
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  if (!user) { 
    console.error('User is not authenticated to perform action') 
    return
  }

  const {data, error} = await supabase
    .from('watches')
    .update(
      { 
        model, 
        brand, 
        reference_number: referenceNumber,
      }
    ).match({id, user_id: user.id})
      // console.log('data' + data)
    if (error){
      console.error('Error inserting data', error)
      return;
  }

  revalidatePath('/watch-list')

  return {message: 'Success'}
}