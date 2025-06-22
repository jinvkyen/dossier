import type { ReactNode } from "react";

type IconCardProps = {
  icon: ReactNode;
};

export default function IconCard({ icon }: IconCardProps) {
  return <div className='w-12 h-12 bg-bgoutline rounded-xl flex items-center justify-center mr-4'>{icon}</div>;
}

