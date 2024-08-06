import Image from "next/image"
import { IoIosMore } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import Comments from "./Comments";


const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?t=st=1722800879~exp=1722801479~hmac=7c59b0b41ef4cfc53a591e841643c17f76cbe010318b2a16fb5b099c7f54e249" width={40} height={40} alt="" className="w-10 h-10 rounded-full" />
                    <span>Adhitri</span>
                </div>
                <IoIosMore className='w-5 h-5 cursor-pointer' />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image
                        src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?t=st=1722802692~exp=1722806292~hmac=5bf6342044641c3def30dd638ef984f3364f19c4dcd994032fc5854886b75b0f&w=996"
                        fill
                        alt=""
                        className="object-cover rounded-md"
                    />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptas inventore sint et est eius vel iure velit excepturi commodi.</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm">
                <div className="flex gap-8">
                    <div className="flex items-center gap-3 rounded-xl">
                        <AiOutlineLike className="w-4 h-4 text-blue-500 cursor-pointer" />
                        <span className=" text-gray-300">|</span>
                        <span className=" text-gray-500">
                            123 <span className="hidden md:inline">Likes</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl">
                        <FaComment className="w-4 h-4 text-blue-500 cursor-pointer" />
                        <span className=" text-gray-300">|</span>
                        <span className=" text-gray-500">
                            123 <span className="hidden md:inline">Comments</span>
                        </span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-3 rounded-xl">
                        <FaShareSquare className="w-4 h-4 text-blue-500 cursor-pointer" />
                        <span className=" text-gray-300">|</span>
                        <span className=" text-gray-500">
                            123 <span className="hidden md:inline">shares</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post
