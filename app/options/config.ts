export type Category =
  | "frontend"
  | "backend"
  | "database"
  | "auth"
  | "realtime"
  | "mlai";

export interface OptionConfig {
  label: string;
  cliCommand: string | null;
}

export interface CategoryConfig {
  category: Category;
  title: string;
  maxSelections: number;
  exclusiveLabels?: string[];
  options: OptionConfig[];
}

const config: CategoryConfig[] = [
  {
    category: "frontend",
    title: "Frontend",
    maxSelections: 1,
    options: [
      { label: "Image3", cliCommand: "npx install image3-dummy" },
      { label: "Image2", cliCommand: "npx install image2-dummy" },
    ],
  },
  {
    category: "backend",
    title: "Backend",
    maxSelections: 2,
    exclusiveLabels: ["Supabase"],
    options: [
      { label: "Supabase", cliCommand: "npx install supabase-dummy" },
      { label: "Image6", cliCommand: "npx install image6-dummy" },
      { label: "Image5", cliCommand: "npx install image5-dummy" },
    ],
  },
  {
    category: "database",
    title: "Database",
    maxSelections: 1,
    options: [{ label: "Image1", cliCommand: "npx install db-dummy" }],
  },
  {
    category: "auth",
    title: "Auth",
    maxSelections: 1,
    options: [{ label: "Image1", cliCommand: "npx install auth-dummy" }],
  },
  {
    category: "realtime",
    title: "Realtime",
    maxSelections: 1,
    options: [{ label: "Image1", cliCommand: "npx install realtime-dummy" }],
  },
  {
    category: "mlai",
    title: "ML/AI",
    maxSelections: 1,
    options: [{ label: "Image4", cliCommand: "npx install mlai-dummy" }],
  },
];

export default config;
