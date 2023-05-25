import React, { Component } from "react";

interface ButtonProps {
  id: string;
  Label?: string;
  onClick?: React.MouseEventHandler;
}

class Button extends Component<ButtonProps> {
  render() {
    const { id, Label, onClick } = this.props;

    return (
      <button id={id} className="btn btn-primary" onClick={onClick}>
        {Label}
      </button>
    );
  }
}

export default Button;
