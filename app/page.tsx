import HomeHeader from "./_components/HomeHeader";
import LatestPosts from "./_components/LatestPosts";
import MaxWidthWrapper from "@/app/_components/MaxWidthWrapper";
export default function Home() {
  return (
    <MaxWidthWrapper>
      <HomeHeader />
      <LatestPosts />
    </MaxWidthWrapper>
  );
}
