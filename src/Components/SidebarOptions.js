import {
  Home,
  Bot,
  Database,
  Library,
  Layers,
  Server,
  Activity,
  PlayCircle,
  Key,
  Settings,
} from "lucide-react";

export const sidebarOptions = [
  {
    section: "MY PROJECTS",
    items: [
      { label: "Agents", route: "/agents", icon: Bot },
      { label: "AI Models", route: "/ai-models", icon: Database },
      { label: "Library", route: "/library", icon: Library },
    ],
  },
  {
    section: "ORCHESTRATOR",
    items: [
      { label: "Published", route: "/published", icon: Layers },
      { label: "Machines", route: "/machines", icon: Server },
      { label: "Queues", route: "/queues", icon: Layers },
      { label: "Triggers", route: "/triggers", icon: Activity },
      { label: "Jobs", route: "/jobs", icon: PlayCircle },
      { label: "Executions", route: "/executions", icon: Activity },
      { label: "Vault", route: "/vault", icon: Key },
      { label: "Knowledge Base", route: "/knowledge-base", icon: Database },
      { label: "Key Store", route: "/key-store", icon: Key },
    ],
  },
  {
    section: "ADMIN",
    items: [
      { label: "Tenant", route: "/tenant", icon: Settings },
      { label: "Integrations", route: "/integrations", icon: Settings },
    ],
  },
];