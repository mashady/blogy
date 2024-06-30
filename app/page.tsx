import HomeHeader from "./_components/HomeHeader";
import LatestPosts from "./_components/LatestPosts";
import MaxWidthWrapper from "@/app/_components/MaxWidthWrapper";
export default function Home() {
  /**
   * on the feature component we will create fetch for the first posts and the latest posts we fecth posts from the last.
   *
   */
  return (
    <MaxWidthWrapper>
      <HomeHeader /> {/** hero post and the features */}
      <LatestPosts />
    </MaxWidthWrapper>
  );
}
