import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <p>&copy; 2024 Statsify. All rights reserved.</p>
      <div className="flex justify-center items-center gap-10 p-8">
        <div className="text-md text-secondary">A project by Rupok Adin </div>
        <a
          href="https://github.com/rupokghosh/Spotistats"
          className="text-secondary underline"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
