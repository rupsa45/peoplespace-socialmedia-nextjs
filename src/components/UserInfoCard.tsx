import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { MdSchool } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const UserInfoCard = ({ userId }: { userId: string }) => {
    return (
        <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                <Link href='/' className="text-blue-500">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-slate-300">Emily Parker</span>
                    <span className="text-xs bg-pink-100 text-pink-700  rounded-sm">@parker45</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center gap-2">
                    <FaLocationDot className="h-4 w-4 cursor-pointer" />
                    <span>Living in <b>Asansol</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <MdSchool className="h-4 w-4 cursor-pointer" />
                    <span>Went to  <b>DAV Public School</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <MdWork className="h-4 w-4 cursor-pointer" />
                    <span>Works at <b>Google</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <LuLink className="h-4 w-4 cursor-pointer" />
                        <Link href='https://rupsadas.netlify.app/' className="text-blue-500">rupsa.app</Link>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaClock className="h-4 w-4 cursor-pointer"/>
                        <span>Joined Aug 2022</span>
                    </div>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
                    Follow
                </button>
                <span className=" text-red-400 self-end text-sm  cursor-pointer">Block User</span>
            </div>
        </div>
    )
}

export default UserInfoCard
