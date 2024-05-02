import HomeHeader from "./_components/HomeHeader";
import LatestPosts from "./_components/LatestPosts";
export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto px-4">
      <HomeHeader />
      <LatestPosts />
    </main>
  );
}
