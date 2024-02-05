import { authSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authSession()
    return (
        <div className="flex justify-center items-center flex-col text-color-primary mt-8">
            <h5 className="text-2xl font-bold ">Hello, {user.name}</h5>
            <Image
                src={user?.image}
                alt="..."
                width={250}
                height={250}
                priority
                className="py-8" />
            <div className="flex flex-wrap gap-4 py-4">
                <Link
                    href="/user/dashboard/collection"
                    className="bg-color-accent hover:bg-color-primary text-color-dark font-bold text-xl transition-all px-4 py-3">
                    My Collection
                </Link>
                <Link
                    href="/user/dashboard/comment"
                    className="bg-color-accent hover:bg-color-primary text-color-dark font-bold text-xl transition-all px-4 py-3">
                    My Comment
                </Link>
                <Link
                    href="/user/dashboard/rating"
                    className="bg-color-accent hover:bg-color-primary text-color-dark font-bold text-xl transition-all px-4 py-3">
                    My Rating
                </Link>
            </div>
        </div>
    )
}

export default Page