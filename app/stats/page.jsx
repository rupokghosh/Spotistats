"use client";

import React from "react";
import TimeBtn from "../components/TimeBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  const [timeRange, setTimeRange] = useState("short_term");
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  const textStyles = "text-xl font-semibold text-secondary mt-10";

  return (
    <div className="flex flex-col justify-evenly items-center my-10">
      <h1 className="font-bold text-2xl text-secondary mb-16">
        Detailed Statistics
      </h1>
      <div className="btns flex align-center justify-between gap-4 md:gap-64 mb-8">
        <TimeBtn name="One Year" />
        <TimeBtn name="Six Months" />
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
