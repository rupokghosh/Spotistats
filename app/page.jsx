"use client";

import React from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const Pages = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl font-bold text-secondary mt-32">Statsify</h1>
      <h3 className="text-lg text-accent text-center ">
        Why wait for spotify wrapped once a year? <br />
        Discover Your Spotify Stats and Get insights into your listening habits.
      </h3>
      <button
        className="rounded-full py-2 px-4 mb-32 border border-neutral hover:bg-neutral text-neutral hover:text-primary-content "
        onClick={() => signIn("spotify", { callbackUrl: "/home" })}
      >
        Get Started
      </button>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Pages;
