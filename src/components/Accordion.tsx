import { useRef } from "react";
import styled from "styled-components";

interface accordionProps {
  children: React.ReactNode;
  className?: string;
}

interface accordionSummaryProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

interface accordionDetailsProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

const AccordionSummaryStyled = styled.div`
  border: 1px solid grey;
  border-radius: 1em;
  padding: 0.5em;
  background: ${({ theme }) => theme.colors.experienceSummary};
  transition: background 0.25s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.experienceSummaryHover};
  }
`;

const AccordionContentStyled = styled.div<{ height: string }>`
  overflow: hidden;
  margin-bottom: 1em;
  height: ${(props) => props.height};
  transition: height 0.4s ease-out;
`;

const ContentContainer = styled.div`
  margin-top: 1em;
  border: 1px solid grey;
  border-radius: 1em;
  background: ${({ theme }) => theme.colors.experienceDetails};
`;

export function AccordionSummary({
  children,
  className,
  onClick,
}: accordionSummaryProps) {
  return (
    <AccordionSummaryStyled className={className} onClick={onClick}>
      {children}
    </AccordionSummaryStyled>
  );
}

export function AccordionDetails({
  isActive,
  className,
  children,
}: accordionDetailsProps) {
  const contentHeight = useRef<HTMLDivElement | null>(null);

  return (
    <AccordionContentStyled
      className={className}
      height={
        isActive && contentHeight.current
          ? `${contentHeight.current.scrollHeight}px`
          : "0px"
      }
      ref={contentHeight}
    >
      <ContentContainer style={{ padding: "2em" }}>{children}</ContentContainer>
    </AccordionContentStyled>
  );
}

export function Accordion({ children, className }: accordionProps) {
  return <div className={className}>{children}</div>;
}
