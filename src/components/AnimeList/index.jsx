import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link
                        href={`/anime/${anime.mal_id}`}
                        className="cursor-pointer hover:text-color-primary transition-all"
                        key={index}>
                        <Image src={anime.images.webp.image_url}
                            alt="..."
                            width={350}
                            height={350}
                            priority
                            className="rounded" />

                        <h3 className="flex justify-center items-center font-bold md:text-xl text-md p-4">{anime.title}</h3>

                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList