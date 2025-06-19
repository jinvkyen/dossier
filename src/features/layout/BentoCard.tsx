import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};
const BentoCard = ({ children, className = "", hover = true }: BentoCardProps) => (
  <div
    className={`
      bg-bgcards backdrop-blur-sm border border-bgcards/50 rounded-xl
      transition-all duration-300 ease-out border-solid border-1 border-bgoutline
      ${className}
    `
    + (hover ? " hover:scale-105 hover:shadow-lg" : "")

    }>
    {children}
  </div>
);
export default BentoCard;
