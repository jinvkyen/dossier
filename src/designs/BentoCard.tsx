import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};
const BentoCard = ({ children, className = "", hover = true }: BentoCardProps) => (
  <button
    className={
      `
      bg-bgcards backdrop-blur-sm border border-bgcards/50 rounded-xl w-full h-20
      transition-all duration-300 ease-out border-solid border-1 border-bgoutline
      ${className}
    ` + (hover ? " hover:bg-bghover cursor-pointer" : "")
    }>
    {children}
  </button>
);
export default BentoCard;
