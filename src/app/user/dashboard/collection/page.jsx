import Header from "@/components/Dashboard/Header"
import { authSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authSession()
    const collections = await prisma.collection.findMany({
        where: { user_email: user.email }
    })
    console.log({ collection })
    return (
        <section className="mt-4 px-4 w-full">
            <Header title="My Collections" />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5 mx-4">
                {collections.map((collect, index) => {

                    return (
                        <Link
                            key={index}
                            href={`/anime/${collect.anime_mal_id}`}
                            className="relative">
                            <Image
                                src={collect.anime_image}
                                alt="..."
                                width={350}
                                height={350}
                                className="w-full rounded" />
                            <div className="absolute flex justify-center items-center w-full bottom-0 bg-color-primary h-14 ">
                                <h5 className="text-xl text-center">{collect.anime_title}</h5>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </section>
    )
}

export default Page