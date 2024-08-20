import React from "react";

type Props = {
  handleToggle: () => void;
  children: React.ReactNode;
};

const DeleteForm = ({ handleToggle, children }: Props) => {
  return (
    <div className=" min-h-24 f p-4 bg-slate-300 flex flex-col items-center justify-between shadow-2xl ">
      <p className="text-bold text-sm font-bold ">
        are you sure you want to delete the record ?
      </p>

      <div className="flex justify-end gap-4 w-full px-5 text-white">
        {children}
        <button
          className="rounded-md px-4 py-1 bg-slate-400"
          onClick={handleToggle}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteForm;
