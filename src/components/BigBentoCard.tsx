import type { ReactNode } from "react";

type BigBentoCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};


const BigBentoCard = ({ children, className = "" }: BigBentoCardProps) => (
  <div
    className={`
      font-inter bg-bgcards backdrop-blur-sm border border-bgcards/50 rounded-xl
      transition-all duration-300 ease-out border-solid border-1 border-bgoutline w-full
      ${className}
    `}>
    {children}
  </div>
);
export default BigBentoCard;
