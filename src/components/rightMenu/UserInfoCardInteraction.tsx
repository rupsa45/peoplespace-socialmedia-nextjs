"use client"

import { switchBlock, switchFollow } from "@/lib/action";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
    userId,
    isUserBlocked,
    isFollowing,
    isFollowingSent
}: {
    userId: string;
    isUserBlocked: boolean;
    isFollowing: boolean;
    isFollowingSent: boolean
}) => {
    const [userState, setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingSent
    })
    const follow = async () => {
        switchOptimisticState("follow")
        try {
            await switchFollow(userId);
            setUserState(prev => ({
                ...prev,
                following: prev.following && false,
                followingRequestSent:
                    !prev.following && !prev.followingRequestSent ? true : false
            }))
        } catch (error) {
            console.log(error);
        }
    }
    const block = async () => {
        switchOptimisticState("block")
        try {
            await switchBlock(userId)
            setUserState((prev) =>({
                ...prev,
                blocked : !prev.blocked,
            }))
        } catch (error) {
            
        }
    }
    const [optimisticState, switchOptimisticState] = useOptimistic(
        userState,
        (state, value: "follow" | "block") =>
            value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followRequestSent:
                !state.following && !state.followingRequestSent ? true : false,
        }
        : { ...state, blocked: !state.blocked }
    )
    return (
        <>
            <form action={follow}>
                <button className="w-full p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
                    {optimisticState.following
                        ? "Following"
                        : userState.followingRequestSent
                            ? "Cancel Follow Request Sent"
                            : "Follow"
                    }
                </button>
            </form>
            <form action={block} className="self-end ">
                <button>
                <span className=" text-red-400 text-sm  cursor-pointer">
                    {optimisticState.blocked ? "UnBlock User" : "Block User"}
                </span>
                </button>
            </form>
        </>
    )
}

export default UserInfoCardInteraction
