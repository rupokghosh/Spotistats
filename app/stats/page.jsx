import React from "react";
import TimeBtn from "../components/TimeBtn";
const page = () => {
  const textStyles = "text-xl font-semibold text-secondary mt-10";
  return (
    <div className="flex flex-col justify-evenly items-center my-10">
      <h1 className="font-bold text-2xl text-secondary mb-16">
        Detailed Statistics
      </h1>
      <div className="btns flex align-center justify-between gap-4 md:gap-64 mb-8">
        <TimeBtn name="All Time" />
        <TimeBtn name="One Year" />
        <TimeBtn name="One Month" />
      </div>
      <h1 className={textStyles}>Artists</h1>
      <div className="allArtists"></div>
      <h1 className={textStyles}>Songs</h1>
      <div className="allSongs"></div>
      <h1 className={textStyles}>Genres</h1>
      <div className="allGenres"></div>
    </div>
  );
};

export default page;
