"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState(null);
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    // check if session exists
    if (session) {
      const headers = {
        Authorization: `Bearer ${session.token.access_token}`,
      };
      // fetch and set data
      const fetchTopItems = async () => {
        try {
          const [userDataResponse, artistsResponse, tracksResponse] =
            await Promise.all([
              axios.get("https://api.spotify.com/v1/me", { headers }),
              axios.get(
                "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term",
                { headers }
              ),
              axios.get(
                "https://api.spotify.com/v1/me/top/tracks?limit=8&time_range=short_term",
                { headers }
              ),
            ]);
          setUserData(userDataResponse.data);
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
      <div className="userDetails">
        {userData && (
          <div className="flex flex-col items-center gap-2">
            {userData.images.length > 0 && (
              <img
                src={userData.images[0].url}
                alt="avatar"
                className="w-28 rounded-full"
              />
            )}
            <p className="italic text-lg text-error">{`@ ${userData.display_name.toLowerCase()}`}</p>
          </div>
        )}
      </div>

      <div className="font-bold text-2xl text-secondary">
        Top Songs this month
      </div>
      <div className="songs ">
        <ul className=" flex justify-evenly items-center flex-wrap">
          {topTracks.map((track) => (
            <li key={track.id} className="md:w-1/4 mb-6 w-1/2">
              <div className="flex flex-col items-center gap-2 ">
                <img
                  src={track.album.images[0].url}
                  alt={track.name}
                  className="w-32 rounded-lg"
                />
                <h3 className="text-lg text-secondary font-semibold text-center">
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
      <div className="artists flex flex-col md:flex-row justify-evenly items-center gap-6">
        <ul className="flex flex-wrap items-center justify-center md:justify-evenly gap-4 md:gap-10">
          {topArtists.map((artist) => (
            <li key={artist.id} className="flex flex-col items-center">
              <div className="flex flex-col gap-4 md:gap-8 justify-between items-center">
                <img
                  src={artist.images[0].url}
                  alt={artist.name}
                  className="w-20 md:w-24 rounded-full"
                />
                <p className="font-bold text-base md:text-lg text-secondary text-center">
                  {artist.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <Link
          href="/stats"
          className="bg-grey italic text-md shadow-md shadow-neutral px-4 py-2 rounded-full hover:bg-base-100 hover:text-secondary text-neutral hover:shadow-secondary"
        >
          more stats
        </Link>
      </div>
    </div>
  );
}
