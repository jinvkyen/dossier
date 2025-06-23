import type { ReactNode } from "react";

type IconCardProps = {
  icon: ReactNode;
  className?: string;
};

export default function IconCard({ icon, className="" }: IconCardProps) {
  return <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${className}`}>{icon}</div>;
}

