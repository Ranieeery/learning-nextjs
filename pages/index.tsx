// import { Inter } from "next/font/google";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href={"/sobre"}>Sobre</Link>
        </li>
      </ul>
    </div>
  );
}
