"use client";
import React from "react";

interface IBtnProps {
  icon: React.ReactNode;
}

function Btn({ icon }: IBtnProps) {
  const handleClick = () => console.log("Button clicked");

  return (
    <button
      className="w-16 h-16 bg-white border border-zinc-800/20 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
}

export default Btn;
