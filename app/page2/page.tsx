import Link from "next/link";
import React from "react";

const Page2 = () => {
  return (
    <div className="flex flex-col p-20 w-100 justify-center items-center gap-10">
      <p className="white">This is the page 2</p>
      <Link href={"/"}>
        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to the homepage
        </button>
      </Link>
    </div>
  );
};

export default Page2;
