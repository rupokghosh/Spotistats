"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();

  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    if (session) {
      const fetchTopItems = async () => {
        try {
          const headers = {
            Authorization: `Bearer ${session.token.access_token}`,
          };

          const [artistsResponse, tracksResponse] = await Promise.all([
            axios.get(
              "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term",
              { headers }
            ),
            axios.get(
              "https://api.spotify.com/v1/me/top/tracks?limit=8&time_range=short_term",
              { headers }
            ),
          ]);

          setTopArtists(artistsResponse.data.items);
          setTopTracks(tracksResponse.data.items);
        } catch (error) {
          console.error("Error fetching data from Spotify", error);
        }
      };

      fetchTopItems();
    }
  }, [session]);

  console.log(topTracks);
  const img =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  return (
    <div className="flex flex-col items-center justify-evenly gap-10 mt-12">
      <img src={img} alt="avatar" className="w-24 rounded-full" />
      <div className="font-bold text-2xl text-secondary">
        Top Songs this month
      </div>
      <div className="songs ">
        <ul className=" flex justify-evenly items-center flex-wrap">
          {topTracks.map((track) => (
            <li key={track.id} className="w-1/4 mb-6">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={track.album.images[0].url}
                  alt={track.name}
                  className="w-32 rounded-lg"
                />
                <h3 className="text-lg text-secondary font-semibold">
                  {" "}
                  {track.name}
                </h3>
                <p className="text-neutral font-semibold italic">
                  {track.artists[0].name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="font-bold text-2xl text-secondary">
        Top Artists this month
      </div>
      <div className="artists flex justify-evenly items-center gap-6">
        <ul className="flex items-center justify-evenly gap-10">
          {topArtists.map((artist) => (
            <li key={artist.id}>
              <div className="flex flex-col gap-8 justify-between items-center">
                <img
                  src={artist.images[0].url}
                  alt={artist.name}
                  className="w-24 rounded-full"
                />
                <p className="font-bold text-lg text-secondary">
                  {artist.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
