"use client";

import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const btnStyle =
    "bg-grey italic text-md shadow-md shadow-neutral px-6 py-2 rounded-full hover:bg-base-100 hover:text-secondary text-neutral hover:shadow-secondary";

  return (
    <div className="py-8 px-4 md:px-24 flex align-items justify-between">
      <Link href="/home" className="font-bold text-2xl text-secondary">
        Statsify
      </Link>
      <div className="flex gap-8 align-items justify-between text-accent">
        <Link href="/stats" className={btnStyle}>
          stats
        </Link>

        {session ? (
          <button className={btnStyle} onClick={() => signOut()}>
            logout
          </button>
        ) : (
          <button className={btnStyle} onClick={() => signIn("spotify")}>
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
