"use client"
import { SiTicktick } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { FollowRequest, User } from "@prisma/client";
import { useOptimistic, useState } from "react";
import { acceptFollowRequuest, declineFollowRequuest } from "@/lib/action";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState,setRequestState]= useState(requests)
    const accept =async(requestId:number,userId:string)=>{
        removeOptimisticRequest(requestId)
        try {
            await  acceptFollowRequuest(userId)
            setRequestState((prev) => prev.filter((req) => req.id !== requestId))
        } catch (error) {
           console.log(error);
        }
    }
    const decline =async(requestId:number,userId:string)=>{
        removeOptimisticRequest(requestId)
        try {
            await  declineFollowRequuest(userId)
            setRequestState((prev) => prev.filter((req) => req.id !== requestId))
        } catch (error) {
           console.log(error);
        }
    }
    const [optimisticRequests,removeOptimisticRequest] = useOptimistic(
        requestState,
        (state,value:number) =>state.filter(req=> req.id !== value)
    )
  return (
    <div>
      {optimisticRequests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/avatar.png"}
              width={40}
              height={40}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm">{
                (request.sender.name && request.sender.surname)
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}</span>
          </div>
          <div className="flex gap-3 justify-end">
          <form action={()=>accept(request.id,request.sender.id)}>
                <button>
                    <SiTicktick className="h-4 w-4 cursor-pointer text-blue-500" />
                </button>
            </form>
            <form action={()=>decline(request.id,request.sender.id)}>
                <button>
                    <RxCross1 className="h-4 w-4 cursor-pointer text-red-700" />
                </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
