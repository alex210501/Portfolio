import { ReactNode } from "react";
import StyledSection from "../styles/StyledSection";

interface sectionProps {
  innerRef: React.RefObject<HTMLDivElement>;
  children: ReactNode;
}

export interface labeledSectionProps {
    innerRef: React.RefObject<HTMLDivElement>;
}

export default function Section({ innerRef, children }: sectionProps) {
  return <StyledSection ref={innerRef}>{children}</StyledSection>;
}
