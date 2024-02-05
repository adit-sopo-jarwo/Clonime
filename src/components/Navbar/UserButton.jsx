import { authSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserButton = async() => {
    const user = await authSession();
    const  actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
        <div className="flex justify-between gap-4">
            {
                user ? <Link href="/user/dashboard" className="py-1">Dashboard</Link> : null

            }
            <Link href={actionUrl} className="cursor-pointer bg-color-dark hover:bg-color-accent transition-all py-1 px-5 inline-block">{actionLabel}</Link> 
        </div>
    )
}

export default UserButton