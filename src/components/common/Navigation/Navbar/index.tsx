import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

import { Menu } from "../NavigationMenu";

const ThemeToggleButton = dynamic(
  () => import("@/components/common/ThemeToggleButton"),
  { ssr: false },
);

export const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[1100] h-14 w-full border-b bg-background px-4">
      <div className="flex h-14 items-center justify-between">
        <Link className="text-lg font-semibold hover:underline" href="/">
          Edwin H
        </Link>

        <div className="flex items-center space-x-4">
          <ThemeToggleButton />
          <Menu />
        </div>
      </div>
    </nav>
  );
};
