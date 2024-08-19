import React from "react";

type Props = {
  children: React.ReactNode;
};

function Message({ children }: Props) {
  return (
    <h2 className="w-full text-center py-3 text-slate-600 font-bold">
      {children}
    </h2>
  );
}

export default Message;
