import React, { FC } from "react";

interface ButtonProps {
  id: string;
  Label?: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ id, Label, onClick }) => {
  return (
    <button id={id} className="btn btn-primary" onClick={onClick}>
      {Label}
    </button>
  );
};

export default Button;
