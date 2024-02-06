import prisma from "@/libs/prisma";
import { average } from "average-rating";
import StarRatings from 'react-star-ratings';

const StarAvege = async ({ anime_mal_id }) => {
    const ratings = await prisma.rating.findMany({ where: { anime_mal_id } });

    console.log(ratings)

    const averageRating = average(ratings.map((rating) => rating.rating))

    return (
        <div className='flex justify-between'>
            {ratings.map((rating, index) => (
                <div key={index} className="flex items-center">
                    <StarRatings
                        rating={rating.rating}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="40px"
                        starSpacing="2px"
                    />
                    <p>({rating.rating})</p>
                </div>
            ))}
        </div>
    );
};

export default StarAvege;
