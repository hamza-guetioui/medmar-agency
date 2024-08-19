import React from "react";

type Props = {
  id: string;
  action: (formData: FormData) => Promise<void>;
  handleToggle: () => void;
};

const DeleteForm = ({ id, action, handleToggle }: Props) => {
  return (
    <div className=" min-h-24 f p-4 bg-slate-300 flex flex-col items-center justify-between shadow-2xl ">
      <p className="text-bold text-sm font-bold ">
        are you sure you want to delete the record ?
      </p>

      <div className="flex justify-end gap-4 w-full px-5 text-white">
        <form action={action}>
          <input type="hidden" value={id} name="id" />
          <button className="rounded-md px-4 py-1 bg-red-400">Delete</button>
        </form>

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
