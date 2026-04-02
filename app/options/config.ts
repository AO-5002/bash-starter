// app/options/config.ts

export type Category =
  | "frontend"
  | "backend"
  | "database"
  | "auth"
  | "realtime"
  | "mlai";

export interface OptionConfig {
  label: string;
  /** The CLI command/flags this option contributes. Fill in later. */
  cliCommand: string | null;
}

export interface CategoryConfig {
  category: Category;
  title: string;
  maxSelections: number;
  /** Labels that, when selected, cap maxSelections to 1 regardless of the limit above */
  exclusiveLabels?: string[];
  options: OptionConfig[];
}

const config: CategoryConfig[] = [
  {
    category: "frontend",
    title: "Frontend",
    maxSelections: 1,
    options: [
      { label: "Image3", cliCommand: null },
      { label: "Image2", cliCommand: null },
    ],
  },
  {
    category: "backend",
    title: "Backend",
    maxSelections: 2,
    exclusiveLabels: ["Supabase"],
    options: [
      { label: "Supabase", cliCommand: null },
      { label: "Image6", cliCommand: null },
      { label: "Image5", cliCommand: null },
    ],
  },
  {
    category: "database",
    title: "Database",
    maxSelections: 1,
    options: [{ label: "Image1", cliCommand: null }],
  },
  {
    category: "auth",
    title: "Auth",
    maxSelections: 1,
    options: [{ label: "Image1", cliCommand: null }],
  },
  {
    category: "realtime",
    title: "Realtime",
    maxSelections: 1,
    options: [{ label: "Image1", cliCommand: null }],
  },
  {
    category: "mlai",
    title: "ML/AI",
    maxSelections: 1,
    options: [{ label: "Image4", cliCommand: null }],
  },
];

export default config;
