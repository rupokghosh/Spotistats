"use client";

import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="py-8 px-4 md:px-24 flex align-items justify-between">
      <Link href="/" className="font-bold text-2xl text-secondary">
        Statsify
      </Link>
      <div className="flex gap-8 align-items justify-between text-accent">
        <Link
          href="/stats"
          className="rounded-full border-b border-accent px-5 py-1 hover:bg-secondary hover:text-black"
        >
          stats
        </Link>
        <button className="rounded-full border-b border-accent px-4 hover:bg-secondary hover:text-black ">
          share
        </button>
        {session ? (
          <button
            className="rounded-full border-b border-accent px-4 hover:bg-secondary hover:text-black"
            onClick={() => signOut()}
          >
            logout
          </button>
        ) : (
          <button
            className="rounded-full border-b border-accent px-4 hover:bg-secondary hover:text-black"
            onClick={() => signIn("spotify")}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
