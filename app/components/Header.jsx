import React from "react";

const Header = () => {
  return (
    <div className="py-8 px-24 flex align-items justify-between">
      <h1 className="font-bold text-2xl text-secondary">Spotistats</h1>
      <div className="flex gap-8 align-items justify-between text-accent">
        <button className="rounded-full border-b border-accent px-4 hover:bg-neutral">
          myStats
        </button>
        <button className="rounded-full border-b border-accent px-4 hover:bg-neutral ">
          Share
        </button>
      </div>
    </div>
  );
};

export default Header;
