import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiTemplate } from "react-icons/hi";

const navigation = [
  { name: "Dashboard", href: "/", icon: HiTemplate },
  { name: "Reset", href: "/reset", icon: HiTemplate },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile", icon: HiTemplate },
];

const Sidebar = () => {
  const router = useRouter();

  // const isCurrent = (item) => {
  //   return router.pathname === item.href
  // }
  return (
    <section className="fixed top-0 z-40 flex h-screen w-[120px] flex-col items-center space-y-8 bg-gray-800 p-4">
      <Image
        src="/favicon.svg"
        alt=""
        width={56}
        height={56}
        objectFit="contain"
      />
      <div className="flex flex-col space-y-8">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="sidebarIcon">
            {item.name}
            <item.icon className="h-6 w-6" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
