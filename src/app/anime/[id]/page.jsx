import CollectionButton from "@/components/AnimeList/CollectionButton"
import CommentInput from "@/components/AnimeList/CommentInput"
import ListCommnet from "@/components/AnimeList/ListComment"
import StarAvege from "@/components/AnimeList/StarAvege"
import StarRating from "@/components/AnimeList/StarRating"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"
import { authSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authSession()
    const collection = await prisma.collection.findMany({
        where: { user_email: user?.email, anime_mal_id: id }
    })
    const rating = await prisma.rating.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl">{anime.data.title}</h3>
                <h3 className="text-xl">{anime.data.title_english}</h3>
                {!rating && user ? (<StarRating anime_mal_id={id} user_email={user?.email} anime_title={anime.data.title} />)
                    :
                    (<StarAvege anime_mal_id={id} />)}
                {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}
            </div>

            <div className="pt-4 px-4 flex gap-2">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="rounded object-cover"
                />

                <div className="flex flex-col text-2xl gap-4 mx-3 my-3">
                    <h3>{`Rank  :   ${anime.data.rank}`}</h3>
                    <h3>{`Score :   ${anime.data.score}`}</h3>
                    <h3>{`Episode :   ${anime.data.episodes}`}</h3>
                    <h3>{`Season    :   ${anime.data.season}`}</h3>
                    <h3>{`Type    :   ${anime.data.type}`}</h3>
                    <h3>{`Year  :   ${anime.data.year}`}</h3>
                    <h3>{`Studio  :   ${anime.data.studios[0].name}`}</h3>
                </div>

            </div >

            <div className="mt-4 mx-4">
                <h3 className="text-2xl py-2">The Synopsis</h3>
                <p className="text-2xl text-justify">{anime.data.synopsis}</p>
            </div>

            {
                user && (
                    <div className="p-4">
                        <h3 className="text-xl">Write Comment Here</h3>
                        <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />
                    </div>
                )
            }

            <div>
                <h3 className="mx-4 font-bold text-xl">Comments</h3>
                <ListCommnet anime_mal_id={id} />
            </div>

            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page
