import {
  type LucideIcon,
  User,
  SquareUserRound,
  Newspaper,
  PencilLine,
} from "lucide-react";

export type NavLink = {
  title: string;
  label?: string;
  icon?: LucideIcon;
  variant?: "default" | "ghost";
  href?: string;
};

const navLinks: Record<string, NavLink[]> = {
  sideNavMain: [
    {
      title: "Patient Dashboard",
      icon: User,
      variant: "default",
      href: "/dashboard",
    },
    {
      title: "Demographics",
      icon: SquareUserRound,
      variant: "ghost",
      href: "/demographics",
    },
    {
      title: "Exams",
      icon: Newspaper,
      variant: "ghost",
      href: "/exams",
    },
    {
      title: "Prescriptions",
      icon: PencilLine,
      variant: "ghost",
      href: "/prescriptions",
    },
  ],
};

export const siteConfig = {
  navLinks: navLinks,
};
