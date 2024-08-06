import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"


const ProfileCard = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const user = await prisma.user.findFirst({
    where: {
      id: userId
    },
    include: {
      _count: {
        select: {
          followers: true
        }
      }
    }
  })
  console.log(user);
  if (!user) return null
  return (
    <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user.cover || "/cover.png"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://img.freepik.com/free-photo/beautiful-brunette-serious-girl-portrait_23-2148176373.jpg?t=st=1722853603~exp=1722857203~hmac=560bb64e50cfb1add95560518c7afb61a2c98bed0af95247cf326453ce42c0e5&w=996"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover "
            />
            <Image
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1722853204~exp=1722856804~hmac=70534c12fdcc323e1373cb2442abc6e26be8d8b877e9e3293d005bae4edcfa2e&w=996"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover "
            />
            <Image
              src="https://img.freepik.com/free-photo/ii-nu-expression-face448_1308-171277.jpg?t=st=1722853498~exp=1722857098~hmac=4f45f0c9612538d8774ac8f1a8e6a8b0d69d7651088d37f470f72f55aee458c8&w=740"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover "
            />
          </div>
          <span className="text-xs text-gray-400">{user._count.followers} followers</span>
        </div>
        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg shadow-md ">My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
