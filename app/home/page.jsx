import React from "react";
import Link from "next/link";
const pages = () => {
  return (
    <div>
      <main className="text-center p-10">
        <section className="py-20 ">
          <h1 className="text-5xl font-bold mb-6">
            Discover Your Spotify Stats
          </h1>
          <p className="text-xl mb-10">
            Get insights into your listening habits and enjoy personalized music
            analytics.
          </p>
          <Link
            href="/"
            className="bg-green-500 text-white px-6 py-3 rounded text-lg "
          >
            Get Started
          </Link>
        </section>

        <section id="features" className="py-20">
          <h2 className="text-4xl font-bold mb-10">Features</h2>
          <div className="space-y-10">
            <div className="p-2 rounded">
              <h3 className="text-2xl font-bold ">Real-time Stats</h3>
              <p>See your most played songs and artists in real-time.</p>
            </div>
            <div className="p-2 rounded">
              <h3 className="text-2xl font-bold ">Spotify Wrapped Insights</h3>
              <p>
                Relive your top music moments of the year with detailed wrapped
                insights.
              </p>
            </div>
            <div className=" p-2 rounded ">
              <h3 className="text-2xl font-bold ">Top Artists/Tracks</h3>
              <p>
                Find out which artists and tracks you`&apos`ve been listening to the
                most.
              </p>
            </div>
          </div>
        </section>

        <section id="wrapped" className="py-20 ">
          <h2 className="text-4xl font-bold mb-6">Spotify Wrapped</h2>
          <p className="mb-6">
            Each year, Spotify Wrapped brings you the music and podcasts you`&apos`ve{" "}
            <br />
            listened to the most. With Statsify, you can dive even deeper into{" "}
            <br />
            your Wrapped stats and see more detailed insights.
          </p>
        </section>
      </main>
    </div>
  );
};

export default pages;
