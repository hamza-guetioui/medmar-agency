import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  handleDelete: () => void;
};

const DelBtn = ({ handleDelete }: Props) => {
  return (
    <label
      htmlFor="delDetail"
      className="relative bg-red-500/80 hover:text-red-500 hover:bg-white text-white w-6 h-6 flex justify-center items-center rounded-md self-end"
    >
      <input
        id="delDetail"
        type="button"
        className="absolute opacity-0"
        onClick={() => handleDelete()}
      />

      <FontAwesomeIcon icon={faSquareMinus} className="h-6 w-6" />
    </label>
  );
};

export default DelBtn;
