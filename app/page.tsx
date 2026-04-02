"use client";

import { useState } from "react";
import Section from "./components/Section";
import {
  frontendOptions,
  backendOptions,
  authOptions,
  databaseOptions,
  realtimeOptions,
  mlAiOptions,
} from "./options/data";
import CLISection from "./components/CLISection";
import { Category } from "./options/config";

function useSingleSelect() {
  const [items, setItems] = useState<string[]>([]);
  const toggle = (label: string) =>
    setItems((prev) => (prev.includes(label) ? [] : [label]));
  return [items, toggle] as const;
}

function useBackendSelect() {
  const [items, setItems] = useState<string[]>([]);
  const toggle = (label: string) => {
    setItems((prev) => {
      if (prev.includes(label)) return prev.filter((l) => l !== label);
      if (label === "Supabase") return ["Supabase"];
      if (prev.includes("Supabase")) return [label];
      if (prev.length >= 2) return prev;
      return [...prev, label];
    });
  };
  return [items, toggle] as const;
}

export default function Home() {
  const [userFrontend, toggleFrontend] = useSingleSelect();
  const [userBackend, toggleBackend] = useBackendSelect();
  const [userDatabase, toggleDatabase] = useSingleSelect();
  const [userAuth, toggleAuth] = useSingleSelect();
  const [userRealtime, toggleRealtime] = useSingleSelect();
  const [userMlAi, toggleMlAi] = useSingleSelect();

  const selections: Partial<Record<Category, string[]>> = {
    frontend: userFrontend,
    backend: userBackend,
    database: userDatabase,
    auth: userAuth,
    realtime: userRealtime,
    mlai: userMlAi,
  };

  return (
    <main className="min-h-screen w-full px-36 py-12">
      <h1 className="text-4xl font-bold mb-8">Project Starter CLI</h1>
      <div className="w-full h-full flex items-start justify-between gap-8">
        <div className="flex flex-col justify-start gap-4 shrink-0">
          <Section
            title="Frontend"
            content={frontendOptions}
            selected={userFrontend}
            onSelect={toggleFrontend}
          />
          <Section
            title="Backend"
            content={backendOptions}
            selected={userBackend}
            onSelect={toggleBackend}
          />
          <Section
            title="Database"
            content={databaseOptions}
            selected={userDatabase}
            onSelect={toggleDatabase}
          />
          <Section
            title="Auth"
            content={authOptions}
            selected={userAuth}
            onSelect={toggleAuth}
          />
          <Section
            title="Realtime"
            content={realtimeOptions}
            selected={userRealtime}
            onSelect={toggleRealtime}
          />
          <Section
            title="ML/AI"
            content={mlAiOptions}
            selected={userMlAi}
            onSelect={toggleMlAi}
          />
        </div>
        <div className="flex-1 h-full">
          <CLISection selections={selections} />
        </div>
      </div>
    </main>
  );
}
