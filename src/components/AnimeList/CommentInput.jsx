"use client"

import { PaperPlaneRight } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useState } from "react"


const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {

    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const router = useRouter()

    const handleInput = (event) => {
        const inputValue = event.target.value;
        setComment(inputValue);
        setErrorMessage(inputValue.length <= 3 ? "Please enter more than 3 characters" : "")
    }

    const handlePosting = async (event) => {
        event.preventDefault()

        if (errorMessage) {
            return;
        }

        const data = { anime_mal_id, user_email, comment, username, anime_title }

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postComment = await response.json()
        if (postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            setErrorMessage("")
            router.refresh()
        }
        return
    }

    return (
        <div className="relative">
            {isCreated && <p>Comment Has Been Posted...</p>}
            {errorMessage && <p className="text-color-primary">{errorMessage}</p>}
            <textarea
                onChange={handleInput}
                value={comment}
                className="w-full h-28 text-xl py-2 px-5" />
            <div className="absolute bottom-0 right-0">
                <button
                    onClick={handlePosting}
                    className="text-color-accent hover:text-color-primary">
                    <PaperPlaneRight size={38} />
                </button>
            </div>
        </div>

    )
}

export default CommentInput