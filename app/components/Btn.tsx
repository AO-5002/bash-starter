"use client";
import React from "react";

interface IBtnProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onSelect: (label: string) => void;
}

function Btn({ icon, label, selected, onSelect }: IBtnProps) {
  return (
    <button
      onClick={() => onSelect(label)}
      className={`w-16 h-16 border rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-all duration-200 ${
        selected
          ? "bg-zinc-900 border-zinc-900 ring-2 ring-zinc-900 ring-offset-2"
          : "bg-white border-zinc-800/20"
      }`}
    >
      <span className={selected ? "invert" : ""}>{icon}</span>
    </button>
  );
}

export default Btn;
