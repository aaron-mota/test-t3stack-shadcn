import {
  type LucideIcon,
  Archive,
  ArchiveX,
  File,
  Inbox,
  Send,
  Trash2,
} from "lucide-react";

export type NavLink = {
  title: string;
  label?: string;
  icon?: LucideIcon;
  variant?: "default" | "ghost";
};

const navLinks: Record<string, NavLink[]> = {
  sideNavMain: [
    {
      title: "Inbox",
      label: "128",
      icon: Inbox,
      variant: "default",
    },
    {
      title: "Drafts",
      label: "9",
      icon: File,
      variant: "ghost",
    },
    {
      title: "Sent",
      label: "",
      icon: Send,
      variant: "ghost",
    },
    {
      title: "Junk",
      label: "23",
      icon: ArchiveX,
      variant: "ghost",
    },
    {
      title: "Trash",
      label: "",
      icon: Trash2,
      variant: "ghost",
    },
    {
      title: "Archive",
      label: "",
      icon: Archive,
      variant: "ghost",
    },
  ],
};

export const siteConfig = {
  navLinks: navLinks,
};
