import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"


const UserMediaCard = ({ user }: { user:  User }) => {
    return (
        <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href='/' className="text-blue-500">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="/image1.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="/image3.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="https://cdn.pixabay.com/photo/2023/07/27/11/42/mountain-8153221_640.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="https://cdn.pixabay.com/photo/2024/02/16/19/22/green-parrot-8578207_640.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_640.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="https://cdn.pixabay.com/photo/2024/01/23/14/37/couple-8527721_640.png"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-20">
                    <Image 
                        src="https://cdn.pixabay.com/photo/2024/01/24/22/23/boy-8530678_640.png"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard
