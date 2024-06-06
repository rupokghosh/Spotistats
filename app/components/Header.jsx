import React from "react";

const Header = () => {
  return (
    <div className=" py-4 px-24 flex align-items justify-between">
      <h1 className="font-bold text-2xl text-primary">Spotistats</h1>
      <div className="flex gap-8 align-items justify-between text-primary-content">
        <button className="rounded-full bg-primary px-4 hover:bg-secondary">
          myStats
        </button>
        <button className="rounded-full  bg-primary px-4 hover:bg-secondary ">
          Share
        </button>
      </div>
    </div>
  );
};

export default Header;
