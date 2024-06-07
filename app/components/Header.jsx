import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-8 px-4 md:px-24 flex align-items justify-between">
      <Link href="/" className="font-bold text-2xl text-secondary">
        Spotistats
      </Link>
      <div className="flex gap-8 align-items justify-between text-accent">
        <Link
          href="/stats"
          className="rounded-full border-b border-accent px-4 hover:bg-neutral"
        >
          myStats
        </Link>
        <button className="rounded-full border-b border-accent px-4 hover:bg-neutral ">
          Share
        </button>
      </div>
    </div>
  );
};

export default Header;
