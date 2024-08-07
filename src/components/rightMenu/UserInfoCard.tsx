import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { MdSchool } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { User } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";

const UserInfoCard = async ({ user }: { user: User }) => {
    const createdAt = new Date(user.createdAt)
    const formattedDate = createdAt.toLocaleDateString("en-Us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    let isUserBlocked = false
    let isFollowing = false
    let isFollowingSent = false

    const { userId: currentUserId } = auth()

    if (currentUserId) {
        const blockRes = await prisma.block.findFirst({
            where: {
                blockerId: currentUserId,
                blockedId: user.id
            }
        })
        blockRes ? (isUserBlocked = true) : (isUserBlocked = false)
        const followRes = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: user.id
            }
        })
        followRes ? (isFollowing = true) : (isFollowing = false)
        const followReq = await prisma.followRequest.findFirst({
            where: {
                senderId: currentUserId,
                receiverId: user.id
            }
        })
        followReq ? (isFollowingSent = true) : (isFollowingSent = false)
    }

    return (
        <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                {currentUserId === user.id
                    ? (<UpdateUser user={user} />)
                    : (<Link href='/' className="text-blue-500">See all</Link>)
                }
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-slate-300">
                        {user.name && user.surname
                            ? user.name + " " + user.surname
                            : user.username
                        }
                    </span>
                    <span className="text-xs bg-pink-100 text-pink-700  rounded-sm">@{user.username}</span>
                </div>
                {user.description && <p>
                    {user.description}
                </p>}
                {user.city && <div className="flex items-center gap-2">
                    <FaLocationDot className="h-4 w-4 cursor-pointer" />
                    <span>Living in <b>{user.city}</b></span>
                </div>}
                {user.school && <div className="flex items-center gap-2">
                    <MdSchool className="h-4 w-4 cursor-pointer" />
                    <span>Went to  <b>{user.school}</b></span>
                </div>}
                {user.work && <div className="flex items-center gap-2">
                    <MdWork className="h-4 w-4 cursor-pointer" />
                    <span>Works at <b>Google</b></span>
                </div>}
                <div className="flex items-center justify-between">
                    {user.website && <div className="flex items-center gap-1">
                        <LuLink className="h-4 w-4 cursor-pointer" />
                        <Link href={user.website} className="text-blue-500">{user.website}</Link>
                    </div>}
                </div>
                <div className="flex items-center gap-1">
                    <FaClock className="h-4 w-4 cursor-pointer" />
                    <span>Joined {formattedDate}</span>
                </div>
                {(currentUserId && currentUserId !== user.id) && <UserInfoCardInteraction
                    userId={user.id}
                    isUserBlocked={isUserBlocked}
                    isFollowing={isFollowing}
                    isFollowingSent={isFollowingSent}
                />}
            </div>
        </div>
    )
}

export default UserInfoCard
