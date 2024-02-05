"use client"

import { useState } from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ anime_mal_id, user_email, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false);
    const [rating, setRating] = useState(0);

    const handleRating = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, rating, anime_title };

        const response = await fetch("/api/v1/rating", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const StarRating = await response.json();
        console.log(StarRating);
        if (StarRating.isCreated) {
            setIsCreated(true);
            setRating("")
        }
        return
    }

    return (
        <>
            {isCreated ? <p className="flex justify-start items-start">Thanks For You're Rating</p>
                :
                <div className='grid grid-cols-1 gap-3 my-4'>
                    <StarRatings
                        rating={rating}
                        starRatedColor="orange"
                        changeRating={(newRating) => setRating(newRating)}
                        numberOfStars={5}
                        name='rating'
                        starDimension="40px"
                    />
                    <button
                        type='button'
                        className='bg-color-accent hover:bg-color-primary w-32'
                        onClick={handleRating}
                    >
                        Submit Rating
                    </button>
                </div>
            }
        </>
    )
}

export default StarRating;
