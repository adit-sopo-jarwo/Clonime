import Link from "next/link"

const SeeAll = ({ linkHref, linkTitle }) => {
    return (
        <div className="flex justify-center items-center">
            {linkHref && linkTitle ?
                <Link href={linkHref} className="text-xl bg-color-accent hover:bg-color-primary px-4 py-2 transition-all">{linkTitle}</Link>
                : null
            }
        </div>
    )
}

export default SeeAll