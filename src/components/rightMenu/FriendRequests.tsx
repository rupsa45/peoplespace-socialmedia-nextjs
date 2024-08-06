import Image from "next/image"
import Link from "next/link"
import { SiTicktick } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";


const FriendRequests = () => {
    return (
        <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Requests</span>
                <Link href='/' className="text-blue-500">See all</Link>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
                    <Image src="https://cdn.pixabay.com/photo/2024/05/30/19/37/girl-8799169_640.jpg"
                        width={40}
                        height={40}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm">Ms. Olivia Nelson</span>
                </div>
                <div className=" flex gap-3 justify-end">
                    <SiTicktick className="h-4 w-4 cursor-pointer text-blue-500"/>
                    <RxCross1 className="h-4 w-4 cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
                    <Image src="https://cdn.pixabay.com/photo/2024/02/17/17/20/chess-8579843_640.jpg"
                        width={40}
                        height={40}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm">Mr. Thomas Anderson</span>
                </div>
                <div className=" flex gap-3 justify-end">
                    <SiTicktick className="h-4 w-4 cursor-pointer text-blue-500"/>
                    <RxCross1 className="h-4 w-4 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default FriendRequests
