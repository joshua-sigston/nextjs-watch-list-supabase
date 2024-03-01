import React from 'react';
import { deleteWatch } from '../server-actions/deleteWatch';

interface Props {
  id: string;
}

export default function DeleteBtn({ id }: Props) {
  // console.log(id);
  return (
    <form action={deleteWatch}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="bg-red-400 px-3 py-1 rounded-md">
        Delete
      </button>
    </form>
  );
}
