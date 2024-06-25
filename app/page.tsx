import Image from "next/image";
import styles from "./page.module.css";
import awsLogo from "@/public/aws.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-20 w-100 justify-center items-center gap-10">
      <div className="w-100">
        <Image src={awsLogo} alt="logoAws" width={260} />
      </div>
      <div className="flex flex-row gap-5">
        <Link href={"/steps"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Steps route
          </button>
        </Link>
        <Link href={"/git"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Git
          </button>
        </Link>
      </div>
    </div>
  );
}
