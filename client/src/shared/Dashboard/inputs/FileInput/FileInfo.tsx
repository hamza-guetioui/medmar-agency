import React from "react";

type Props = {
  name: string | undefined;
  type: string | undefined;
  size: number | undefined;
};

const FileInfo = ({ name, type, size }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-2">File info</h1>
      <ul className="flex flex-col gap-2 ml-2">
        <li>
          <span className="mr-2 font-semibold">name:</span>{" "}
          {name || <span className="text-slate-400">No file selected</span>}
        </li>
        <li>
          <span className="mr-2 font-semibold">type:</span>{" "}
          {type || <span className="text-slate-400">Unknown</span>}
        </li>
        <li>
          <span className="mr-2 font-semibold">size:</span>
          {size ? (
            `${(size / (1024 * 1024)).toFixed(2)} MB`
          ) : (
            <span className="text-slate-400">0 MB</span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FileInfo;
