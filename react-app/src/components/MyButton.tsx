import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  handleClicked: () => void;
}

const MyButton = ({ children, color = "primary", handleClicked }: Props) => {
  return (
    <div role="button" onClick={handleClicked}>
      {children}
    </div>
  );
};

export default MyButton;
