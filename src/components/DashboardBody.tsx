import React from "react";
import { signOut, useSession } from "next-auth/react";

const DashboardBody = () => {
  const { data: session } = useSession()

  return (
    <section className="relative col-span-full h-screen flex-grow overflow-y-scroll bg-black scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          // onClick={signOut}
          className="flex items-center bg-black space-x-3 text-white opacity-90 rounded-full p-1 pr-2 hover:opacity-80 cursor-pointer"
        >
          <img className="h-10 w-10 rounded-full" src="/favicon.svg" alt="" />
          <h2>{session?.user.name}</h2>
        </div>
      </header>
    </section>
  );
};

export default DashboardBody;
