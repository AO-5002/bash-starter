"use client";

import React, { useState, useEffect } from "react";
import { Clipboard, Check } from "lucide-react";
import { Category } from "../options/config";
import config from "../options/config";

interface CLISectionProps {
  selections: Partial<Record<Category, string[]>>;
}

function resolveCommands(
  selections: Partial<Record<Category, string[]>>,
): string {
  const commands: string[] = [];

  for (const categoryConfig of config) {
    const selected = selections[categoryConfig.category] ?? [];
    for (const label of selected) {
      const option = categoryConfig.options.find((o) => o.label === label);
      if (option?.cliCommand) {
        commands.push(option.cliCommand);
      }
    }
  }

  return commands.join("\n");
}

function CLISection({ selections }: CLISectionProps) {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(resolveCommands(selections));
  }, [selections]);

  const handleCopy = async () => {
    if (!output.trim()) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-[800px] border border-zinc-800/20 rounded-lg flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-zinc-800/20 shrink-0">
        <h2 className="text-lg font-semibold">Command Line Interface</h2>
        <button
          onClick={handleCopy}
          disabled={!output.trim()}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Clipboard className="w-4 h-4" />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Editable Output */}
      <textarea
        value={output}
        onChange={(e) => setOutput(e.target.value)}
        spellCheck={false}
        placeholder="Select options to generate commands..."
        className="flex-1 w-full p-4 font-mono text-sm text-zinc-500 bg-transparent resize-none outline-none placeholder:text-zinc-500"
      />
    </div>
  );
}

export default CLISection;
