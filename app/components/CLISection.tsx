import React from "react";
import { Clipboard } from "lucide-react";

function ActionBar() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-zinc-800/20">
      <h2 className="text-lg font-semibold">Command Line Interface</h2>
      <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200">
        <Clipboard className="w-4 h-4" />
        Copy
      </button>
    </div>
  );
}

function CLIOutput() {
  return (
    <div className="p-2 w-full h-full flex justify-start">
      <p>
        <code>echo &quot;Hello, World!&quot;</code>
      </p>
    </div>
  );
}

function CLISection() {
  return (
    <div className="w-full h-[800px] border border-zinc-800/20 rounded-lg">
      <div className="w-full h-full flex flex-col gap-3">
        <ActionBar />
        <CLIOutput />
      </div>
    </div>
  );
}

export default CLISection;
