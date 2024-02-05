import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import SeeAll from "@/components/AnimeList/SeeAll"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=5")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce (recommendedAnime, 10)

  return (
    <>
      <section>
        <Header title="Top Anime" />
        <AnimeList api={topAnime} />
        <SeeAll linkTitle="See All" linkHref="/populer"/>
      </section>
      <section>
        <Header title="Recommended" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page