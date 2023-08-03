import React from "react";

interface ButtonComponent {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonComponent> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
