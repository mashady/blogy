import Navbar from "./_components/Navbar";
import SearchModal from "./_components/SearchModal";
import DarkModeToggler from "./_components/dark mode/DarkModeToggler";
import SectionsBar from "./_components/SectionsBar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <Link href="/post">post page</Link>
      <Link href="/new-post">new post page</Link>
    </main>
  );
}
