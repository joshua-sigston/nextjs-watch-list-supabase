import React from 'react';
import DeleteBtn from './DeleteBtn';
import EditWatch from './EditWatch';

interface Props {
  id: string;
  model: string;
  brand: string;
  reference_number: string;
}

export default function WatchItem({
  model,
  brand,
  id,
  reference_number,
}: Props) {
  // console.log('watch item' + reference_number);
  return (
    <div className="flex flex-col gap-3 bg-cyan-300 p-3 rounded-md">
      <h3>
        {model} - {brand}
      </h3>
      <div className="flex gap-3">
        <DeleteBtn id={id} />
        <EditWatch
          model={model}
          brand={brand}
          id={id}
          reference_number={reference_number}
        />
      </div>
    </div>
  );
}
