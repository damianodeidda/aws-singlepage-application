import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-20 w-100 justify-center items-center gap-10">
      <p className="white text-4xl">NextJs app deployed to Aws</p>
      <div className="flex flex-row gap-5">
        <Link href={"/page2"}>
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to page2
          </button>
        </Link>
      </div>
    </div>
  );
}
