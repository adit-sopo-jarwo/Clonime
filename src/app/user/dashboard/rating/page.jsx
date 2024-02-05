"use client"

import Header from "@/components/Dashboard/Header";
import { authSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import StarRatings from "react-star-ratings";

const page = async () => {
    const user = await authSession();
    const rating = await prisma.rating.findMany({
        where: { user_email: user.email }
    });


    return (
        <section className="mt-4 px-4 w-full">
            <Header title="My Ratings" />
            <div className="grid grid-cols-4 px-4 py-4 gap-4">
                {rating.map((rating, index) => {
                    return (
                        <Link
                            href={`/anime/${rating.anime_mal_id}`}
                            key={index}
                            className="bg-color-dark p-4 shadow-md"
                        >
                            <p className="flex justify-center items-center text-color-primary mb-2">{rating.anime_title}</p>
                            <p>
                                <StarRatings
                                    rating={rating.rating}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    starDimension="24px"
                                    starSpacing="4px"
                                />
                            </p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default page