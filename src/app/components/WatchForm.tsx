import React from 'react';
import { addWatch } from '../server-actions/addWatch';

export default function WatchForm() {
  return (
    <form
      action={addWatch}
      className="flex flex-col gap-3 bg-violet-400 p-3 rounded-md shadow-md"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          className="rounded-md"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          name="model"
          className="rounded-md"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="referenceNumber">Reference Number</label>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          className="rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-cyan-400 self-center px-3 py-1 rounded-md shadow-md hover:bg-cyan-500"
      >
        Add Watch
      </button>
    </form>
  );
}
