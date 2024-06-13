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

  const textStyles = "text-xl font-semibold text-secondary mt-10 mb-4";

  useEffect(() => {
    if (session) {
      const headers = {
        Authorization: `Bearer ${session.token.access_token}`,
      };

      const fetchData = async () => {
        try {
          const artistResponse = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=10&time_range=${timeRange}`,
            {
              headers,
            }
          );
          setArtists(artistResponse.data.items);

          const songResponse = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=${timeRange}`,
            {
              headers,
            }
          );
          setSongs(songResponse.data.items);

          const allGenres = artistResponse.data.items.flatMap(
            (artist) => artist.genres
          );
          setGenres([...new Set(allGenres)]);
        } catch (error) {
          console.error("Error fetching data from Spotify API:", error);
        }
      };

      fetchData();
      console.log(timeRange);
    }
  }, [timeRange, session]);

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    console.log(range);
  };

  return (
    <div className="flex flex-col justify-evenly items-center my-10">
      <h1 className="font-bold text-2xl text-secondary mb-16">
        Detailed Statistics
      </h1>
      <div className="btns flex align-center justify-between gap-4 md:gap-64 mb-8">
        <TimeBtn
          name="One Year"
          onClick={() => handleTimeRangeChange("long_term")}
        />
        <TimeBtn
          name="Six Months"
          onClick={() => handleTimeRangeChange("medium_term")}
        />
        <TimeBtn
          name="One Month"
          onClick={() => handleTimeRangeChange("short_term")}
        />
      </div>
      <h1 className={textStyles}>Artists</h1>
      <div className="allArtists">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex justify-between items-center gap-32 shadow-sm shadow-neutral mb-6 rounded-md border-neutral border p-3 hover:bg-neutral"
          >
            <div className="text-success text-md font-semibold italic">
              {artist.name}
            </div>
            <img
              src={artist.images[0].url}
              alt={artist.name}
              className="w-12 h-12 rounded-full"
            />
          </div>
        ))}
      </div>
      <h1 className={textStyles}>Songs</h1>
      <div className="allSongs">
        {songs.map((song) => (
          <div key={song.id}>{song.name}</div>
        ))}
      </div>
      <h1 className={textStyles}>Genres</h1>
      <div className="allGenres">
        {" "}
        {genres.map((genre, index) => (
          <div key={index}>{genre}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
