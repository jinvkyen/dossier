import type { ReactNode } from "react";

type TimeProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

const TimeDiv = ({ children }: TimeProps) => <div>{children}</div>;

export default TimeDiv;
