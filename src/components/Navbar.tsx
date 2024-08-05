import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block ">
        <Link href='/' className="font-bold text-blue-500 text-xl">PeopleSpace</Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex text-sm ">
        <div className="flex gap-6 ">
          <Link href='/' className="flex gap-2 ">
            <Image src="/home.png" alt="homepage" width={16} height={16} />
            <span>Home</span>
          </Link>
          <Link href='/' className="flex gap-2">
            <Image src="/friends.png" alt="friendspage" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href='/' className="flex gap-2">
            <Image src="/stories.png" alt="stories" width={16} height={16} />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex p-2 bg-slate-800 items-center rounded-xl">
          <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
          <Image src="/search.png" alt="" width={14} height={14}/>
        </div>
      {/*RIGHT*/}
      <div className=" flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className=" cursor-pointer">
              <Image src="/friends.png" alt="profile" width={20} height={20} />
            </div>
            <div className=" cursor-pointer">
              <Image src="/message.png" alt="profile" width={20} height={20} />
            </div>
            <div className=" cursor-pointer">
              <Image src="/notification.png" alt="profile" width={20} height={20} />
            </div>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="profile" width={20} height={20} />
              <Link href='/sign-in'>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
