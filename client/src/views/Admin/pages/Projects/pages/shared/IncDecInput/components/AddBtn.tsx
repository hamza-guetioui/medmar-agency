import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  handleAdd: () => void;
};

const AddBtn = ({ handleAdd }: Props) => {
  return (
    <label
      htmlFor="addDetail"
      className="bg-green-500 font-bold hover:bg-green-600 my-3 text-white py-2 px-4 flex gap-2 items-center rounded-md mr-4 self-end w-fit"
    >
      <input
        id="addDetail"
        type="button"
        onClick={handleAdd}
        className="absolute opacity-0"
      />
      Add Detail <FontAwesomeIcon icon={faPlus} />
    </label>
  );
};

export default AddBtn;
