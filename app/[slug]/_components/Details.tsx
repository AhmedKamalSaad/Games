import React, { ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
}
const Details = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-neutral-500 font-bold mb-1">{title}</h1>
      {children}
    </div>
  );
};

export default Details;
