import React from "react";
import { deleteReview } from "@/utils/action";

type Props = {
  id: string | number;
  handleToggle: () => void;
};

const AcceptDelete = ({ id, handleToggle }: Props) => {
  return (
    <div className="min-h-32 flex flex-col p-8 bg-white ">
      <p className="text-bold text-2xl">
        are you sure you want to delete the record
      </p>
      <div className="flex justify-end pr-4">
        <form action={deleteReview}>
          <input type="hidden" value={id} name="reviewId" />
          <button className="rounded-md px-4 p-y2 bg-red-400">Delete</button>
        </form>

        <button
          className="rounded-md px-4 p-y2 bg-slate-400"
          onClick={handleToggle}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AcceptDelete;
