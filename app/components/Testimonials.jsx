// components/Testimonials.js
import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mb-24">
      <div className="flex flex-col items-center justify-center p-4 border border-neutral rounded-lg shadow-md max-w-xs">
        <p className="text-lg font-semibold text-center">
          This is what my mom meant when she said we have spotify wrapped at
          home
        </p>
        <span className="mt-2 text-sm font-bold text-neutral">
          - Daniel Tobi
        </span>
      </div>
      <div className="flex flex-col items-center justify-center p-4 border border-neutral rounded-lg shadow-md max-w-xs">
        <p className="text-lg font-semibold text-center">
          A must-have for Spotify users, I mean who does not want to know what
          your music taste is.
        </p>
        <span className="mt-2 text-sm font-bold text-neutral">
          - Amrik Malhans
        </span>
      </div>
      <div className="flex flex-col items-center justify-center p-4 border border-neutral rounded-lg shadow-md max-w-xs">
        <p className="text-lg font-semibold text-center">
          Gotta make sure Weeknd always on top no matter the stat is.
        </p>
        <span className="mt-2 text-sm font-bold text-neutral">
          - Manik Singh
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
