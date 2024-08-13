import Image from "next/image";
import React from "react";

const NoResults = () => {
  return (
    <tbody>
      <tr>
        <td colSpan={1000}>
          <div className="w-full min-h-[60vh] flex flex-col text-3xl font-semibold text-slate-700 justify-center items-center">
            <Image
              src={"/assets/NoResults.png"}
              alt="No Results"
              width={150}
              height={150}
            />
            No Results Found
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default NoResults;
