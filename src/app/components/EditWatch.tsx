'use client';
import React, { useState } from 'react';
import { editWatch } from '../server-actions/editWatch';

interface Props {
  id: string;
  model: string;
  brand: string;
  reference_number: string;
}

export default function EditWatch({
  model,
  brand,
  id,
  reference_number,
}: Props) {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    id,
    model,
    brand,
    referenceNumber: reference_number,
  });
  console.log(formData);
  console.log(reference_number);
  // console.log('formData:' + id, model, brand, reference_number);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        onClick={() => setToggleModal(!toggleModal)}
        className="bg-orange-500 px-3 py-1 rounded-md hover:bg-orange-600"
      >
        EditWatch
      </button>
      {toggleModal && (
        <div className="fixed min-h-screen w-screen top-0 left-0 flex flex-col items-center justify-center">
          <div className="fixed min-h-screen w-screen bg-slate-500 top-0 left-0 opacity-70"></div>
          <p
            className="fixed right-5 top-5 text-lg text-white font-bold"
            onClick={() => setToggleModal(!toggleModal)}
          >
            Close
          </p>
          <div className="relative">
            <form
              action={editWatch}
              className="bg-zinc-400 min-w-[350px] p-3 flex flex-col gap-3 rounded-sm"
            >
              <h2 className="text-center">Edit Form</h2>
              <input type="hidden" name="id" value={id} />
              <div className="flex flex-col gap-1">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="rounded-md px-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="rounded-md px-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="referenceNumber">Reference Number</label>
                <input
                  type="text"
                  id="referenceNumber"
                  name="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="rounded-md px-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-cyan-400 self-center px-3 py-1 rounded-md shadow-md hover:bg-cyan-500"
                onClick={() => setToggleModal(!toggleModal)}
              >
                Edit Watch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
