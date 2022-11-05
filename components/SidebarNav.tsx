import Link from "next/link";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  PlusIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Navigation = [
  { name: "Home", icon: HomeIcon, href: "/" },
  { name: "Search", icon: MagnifyingGlassIcon, href: "/search" },
  { name: "Your Library", icon: BookOpenIcon, href: "/library" },
  { name: "Create Playlist", icon: PlusIcon, href: "/" },
  { name: "Liked Songs", icon: HeartIcon, href: "/favorites", current: false },
];

const SidebarNav = () => {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {Navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group flex items-center px-2 py-2 text-sm font-medium hover:text-white"
        >
          <item.icon className="mr-3 h-6 w-6" />
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
