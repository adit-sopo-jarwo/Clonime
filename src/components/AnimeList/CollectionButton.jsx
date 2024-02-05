"use client"

import { Heart } from "@phosphor-icons/react"
import { useState } from 'react'

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
        }
        return
    }

    return (
        <>
            {
                isCreated ? <p className="flex justify-end items-end">Successfully Added To The Collection</p>
                    :
                    <div className="flex justify-end items-end">
                        <button
                            onClick={handleCollection}
                            className="text-color-accent hover:text-color-primary">
                            <Heart size={48} />
                        </button>
                    </div>
            }
        </>
    )
}

export default CollectionButton
