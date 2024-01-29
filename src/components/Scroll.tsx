import React, { ReactNode } from "react";

interface ScrollProps {
  children: ReactNode;
}

const Scroll: React.FC<ScrollProps> = ({ children }) => {
  return (
    <div
      style={{ overflowY: "auto", border: "1px solid black", height: "auto" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
