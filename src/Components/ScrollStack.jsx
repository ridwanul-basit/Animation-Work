// src/Components/ScrollStack.jsx
import React from "react";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children }) => (
  <section className="scroll-stack-card">
    {children}
  </section>
);

const ScrollStack = ({ children }) => {
  return (
    <div className="scroll-stack-container">
      {children}
    </div>
  );
};

export default ScrollStack;
