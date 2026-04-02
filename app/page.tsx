"use client";

import { useState } from "react";
import Section from "./components/Section";
import { frontendOptions } from "./options/data";

export default function Home() {
  const [userFrontend, setUserFrontend] = useState<string[]>([]);
  const [backendOptions, setBackendOptions] = useState<string[]>([]);
  const [databaseOptions, setDatabaseOptions] = useState<string[]>([]);
  const [authOptions, setAuthOptions] = useState<string[]>([]);
  const [realtimeOptions, setRealtimeOptions] = useState<string[]>([]);
  const [mlAiOptions, setMlAiOptions] = useState<string[]>([]);
  const [deploymentOptions, setDeploymentOptions] = useState<string[]>([]);

  return (
    <main className="min-h-screen w-full mx-36 my-12 flex flex-col justify-start gap-8 ">
      <h1 className="text-4xl font-bold mb-4">Project Starter CLI</h1>
      <Section title="Frontend" content={frontendOptions} />
    </main>
  );
}
