import React from "react";

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface IProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  theme?: ButtonType;
}

const Button: React.FC<IProps> = ({ children, theme = ButtonType.DEFAULT }) => {
  return <button>{children}</button>;
};

export default Button;
