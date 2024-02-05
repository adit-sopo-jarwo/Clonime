import Link from "next/link"
import InputSearch from "./InputSearch"
import UserButton from "./UserButton"


const Navbar = () => {
    return (
        <header className="bg-color-primary">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-2">
                <div className="flex items-center gap-2 md:gap-4">
                    <Link href="/" className="font-bold text-2xl">Clonime</Link>
                </div>
                <div className="flex justify-between gap-2 mt-2">
                    <InputSearch />
                    <UserButton />
                </div>
            </div>
        </header>
    )
}
export default Navbar