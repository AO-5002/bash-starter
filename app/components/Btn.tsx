"use client";
import React from "react";

interface IBtnProps {
  icon: React.ReactNode;
}

function Btn({ icon }: IBtnProps) {
  const handleClick = () => console.log("Button clicked");

  return (
    <button
      className="w-16 h-16 bg-white rounded flex items-center justify-center"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
}

export default Btn;
