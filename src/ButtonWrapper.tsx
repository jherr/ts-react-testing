import React from "react";

export const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title: string;
  }
> = ({ title, ...props }) => <button {...props}>{title}</button>;
