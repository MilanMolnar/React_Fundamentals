import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  handleClicked: () => void;
}

const MyButton = ({ children, color = "primary", handleClicked }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={handleClicked}>
      {children}
    </button>
  );
};

export default MyButton;
