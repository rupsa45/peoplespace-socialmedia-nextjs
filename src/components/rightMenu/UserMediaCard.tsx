import prisma from "@/lib/client"
import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"


const UserMediaCard = async ({ user }: { user: User }) => {
    const postWithMedia = await prisma.post.findMany({
        where: {
            userId: user.id,
            img: {
                not: null,
            }
        },
        take: 8,
        orderBy: {
            createdAt: "desc",
        }
    })
    return (
        <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href='/' className="text-blue-500">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                {postWithMedia.length 
                ? postWithMedia.map((post) => (
                    <div className="relative w-1/5 h-20" key={post.id}>
                        <Image
                            src={post.img!}
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    )):
                    "No media found"
                }
            </div>
        </div>
    )
}

export default UserMediaCard
