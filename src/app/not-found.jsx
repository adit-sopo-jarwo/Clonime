"use client"

import { SmileyXEyes } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <SmileyXEyes size={96} />
                <div className="">
                    <h1 className="text-4xl font-bold">Error | 404</h1>
                    <h3 className="text-3xl font-bold">Looks like you're lost.</h3>
                    <div className="flex-col mt-6">
                        <button
                            onClick={() => router.back()}
                            className="text-color-accent hover:text-color-primary transition-all text-2xl">
                            Click here to go back 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
