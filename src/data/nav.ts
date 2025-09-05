export type NavItem = {
  label: string;
  to: string;
  external?: boolean;
  cta?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Ministries", to: "/ministries" },
  { label: "Sermons", to: "/sermons" },
  { label: "Events", to: "/events" },
  { label: "Give", to: "/give", cta: true },
];