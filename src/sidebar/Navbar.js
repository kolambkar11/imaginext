import React from "react";
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, ClipboardCheckIcon, UsersIcon } from "@heroicons/react/outline";

import "./navstyle.css";
import Profile from "./Profile";
const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Movies", href: "#", icon: FolderIcon, current: false },
  { name: "Events", href: "#", icon: CalendarIcon, current: false },
  { name: "Tasks", href: "#", icon: ClipboardCheckIcon, current: false },
  { name: "Documentation", href: "#", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  return (
    <>
      <div className="hidden bg-white md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">Booking Window</div>
            <Profile />
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className={classNames(item.current ? "bg-red-800 text-white" : "text-black hover:bg-red-800", "group flex items-center px-2 py-2 text-sm font-medium rounded-md")}>
                    <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-red-300" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
