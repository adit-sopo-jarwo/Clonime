"use client"

import { X } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"


const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleVideoButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "250",
        height: "300"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-48 lg:bottom-80 right-4">
                <button
                    onClick={handleVideoButton}
                    className="text-color-primary float-right"><X size={32} /></button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button
                onClick={handleVideoButton}
                className="fixed bottom-52 lg:bottom-96 right-5 w-48 bg-color-accent text-color-dark text-xl hover:bg-color-primary transition-all shadow-xl">
                Watch The Trailer
            </button>
        )
    }
    return isOpen ? <Player /> : <ButtonOpenTrailer />
        
}

export default VideoPlayer