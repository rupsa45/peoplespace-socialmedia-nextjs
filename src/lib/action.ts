"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"
import { z } from "zod"

export const switchFollow = async(userId:string) =>{
    const {userId:currentUserId} = auth()
    if(!currentUserId){
        throw new Error ("User is not authentiaction !")
    }
    try {
        const existingFollow = await prisma.follower.findFirst({
            where:{
                followerId:currentUserId,
                followingId:userId
            }
        })
        if(existingFollow){
            await prisma.follower.delete({
                where :{
                    id:existingFollow.id,
                }
            })
        }else{
            const  exstingFollowReq= await prisma.followRequest.findFirst({
                where :{
                    senderId:currentUserId,
                    receiverId:userId
                }
            })
            if(exstingFollowReq){
                await prisma.followRequest.delete({
                   where:{
                    id:exstingFollowReq.id
                   }
                })
            }else{
                await prisma.followRequest.create({
                    data:{
                        senderId:currentUserId,
                        receiverId:userId
                    }
                })
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong")
    }
}

export const switchBlock = async (userId:string)=>{
    const {userId: currentUserId} =auth()
    if(!currentUserId){
        throw new Error("User is not authenticate")
    }
    try {
        const existingBlock = await prisma.block.findFirst({
            where:{
                blockerId:currentUserId,
                blockedId:userId,
            }
        })
        if(existingBlock){
            await prisma.block.delete({
                where:{
                    id:existingBlock.id
                }
            })
        }else{
            await prisma.block.create({
                data:{
                    blockerId:currentUserId,
                    blockedId:userId
                }
            })
        }
    } catch (error) {
        console.log(error);
        
    }
}

export const acceptFollowRequuest = async(userId : string)=>{
    const {userId:currentUserId} =auth()
    if(!currentUserId){
        throw new Error("User is not authenticate")
    }
    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where :{
                senderId :userId,
                receiverId:currentUserId
            }
        })
        if(existingFollowRequest){
            await prisma.followRequest.delete({
                where:{
                    id:existingFollowRequest.id
                }
            })
            await prisma.follower.create({
                data:{
                    followingId:userId,
                    followerId:currentUserId
                }
            })
        }
    } catch (error) {
        console.log(error);
        
    }

}

export const declineFollowRequuest = async(userId : string)=>{
    const {userId:currentUserId} =auth()
    if(!currentUserId){
        throw new Error("User is not authenticate")
    }
    try {
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where :{
                senderId :userId,
                receiverId:currentUserId
            }
        })
        if(existingFollowRequest){
            await prisma.followRequest.delete({
                where:{
                    id:existingFollowRequest.id
                }
            })
        }
    } catch (error) {
        console.log(error);
        
    }

}


export const updateProfile = async(formData:FormData,cover:string)=>{
    const fields =Object.fromEntries(formData)
    const filteredFields = Object.fromEntries(
        Object.entries(fields).filter(([_, value]) => value !== "")
    )
    console.log(filteredFields);

    const Profile = z.object({
        cover : z.string().optional(),
        name:z.string().max(60).optional(),
        surname:z.string().max(60).optional(),
        description :z.string().max(300).optional(),
        city:z.string().max(60).optional(),
        school:z.string().max(60).optional(),
        work:z.string().max(60).optional(),
        website:z.string().max(60).optional()
    })
    const validedFields = Profile.safeParse({cover, ...filteredFields})
    if(!validedFields.success){
        console.log(validedFields.error.flatten().fieldErrors); 
        throw new Error("Invalid data")
    }
    const {userId} = auth()
    if(!userId)   if (!userId) throw new Error("User not authenticated");

    try {
        await prisma.user.update({
            where:{
                id:userId
            },
            data: validedFields.data,
        })
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update profile");
    }
}