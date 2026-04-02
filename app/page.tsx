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

export default function Home() {
  const [userFrontend, setUserFrontend] = useState<string[]>([]);
  const [userBackend, setUserBackend] = useState<string[]>([]);
  const [userDatabase, setUserDatabase] = useState<string[]>([]);
  const [userAuth, setUserAuth] = useState<string[]>([]);
  const [userRealtime, setUserRealtime] = useState<string[]>([]);
  const [userMlAi, setUserMlAi] = useState<string[]>([]);
  const [userDeployment, setUserDeployment] = useState<string[]>([]);

  return (
    <main className="min-h-screen w-full px-36 py-12">
      <h1 className="text-4xl font-bold mb-8">Project Starter CLI</h1>
      <div className="w-full h-full flex items-start justify-center gap-auto">
        <div className="flex flex-col justify-start gap-4">
          <Section title="Frontend" content={frontendOptions} />
          <Section title="Backend" content={backendOptions} />
          <Section title="Database" content={databaseOptions} />
          <Section title="Auth" content={authOptions} />
          <Section title="Realtime" content={realtimeOptions} />
          <Section title="ML/AI" content={mlAiOptions} />
        </div>
        <div className="w-full h-full">
          <CLISection />
        </div>
      </div>
    </main>
  );
}
