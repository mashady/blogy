import Navbar from "./_components/Navbar";
import SearchModal from "./_components/SearchModal";
import DarkModeToggler from "./_components/DarkModeToggler";
import SectionsBar from "./_components/SectionsBar";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <DarkModeToggler />
      <Link href="/post">post page</Link>
    </main>
  );
}
