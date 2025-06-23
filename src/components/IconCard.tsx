import type { ReactNode } from "react";

type IconCardProps = {
  icon: ReactNode | null;
  className?: string;
};

export default function IconCard({ icon, className="" }: IconCardProps) {
  return (
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center ${className}`}>
      {icon}
    </div>
  );
}

