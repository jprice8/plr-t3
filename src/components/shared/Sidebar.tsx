import { BeakerIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

import SidebarRow from "./SidebarRow";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Reset", href: "/reset", icon: BeakerIcon },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile", icon: UserIcon },
];

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 flex flex-col items-center px-4 md:items-start">
      <Image
        src="/favicon.svg"
        alt=""
        width={56}
        height={56}
        objectFit="contain"
        className="m-3"
      />
        {navigation.map((item) => (
          <SidebarRow
            displayName={item.name}
            hyperlink={item.href}
            Icon={item.icon}
          />
        ))}
    </nav>
  );
};

export default Sidebar;
