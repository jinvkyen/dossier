import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};
const BentoCard = ({ children, className = "" }: BentoCardProps) => (
  <div
    className={`
      bg-bgcards backdrop-blur-sm border border-bgcards/50 rounded-2xl p-6
      transition-all duration-300 ease-out border-solid border-1 border-bgoutline
      ${className}
    `}>
    {children}
  </div>
);
export default BentoCard;
