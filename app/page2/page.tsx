import Link from "next/link";
import React from "react";

const Page2 = () => {
  return (
    <div className="flex flex-col p-20 w-100 justify-center items-center gap-10">
      <p className="text-3xl">This is the page 2</p>
      <p className="text-base w-2/6 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link href={"/"}>
        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to the homepage
        </button>
      </Link>
    </div>
  );
};

export default Page2;
