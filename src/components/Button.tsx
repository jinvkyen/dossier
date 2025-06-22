import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Button({children, className = "", hover = true}: ButtonProps) {
  return (
    <>
      <button
        className={
          `
      bg-white backdrop-blur-sm border rounded-2xl w-auto pl-2 pr-2 h-10 text-black font-semibold font-inter
      transition-all duration-300 ease-out flex items-center justify-center
      ${className}
    ` + (hover ? " hover:bg-zinc-300 cursor-pointer text-white" : "")
        }>
        {children}
      </button>
    </>
  );
}
