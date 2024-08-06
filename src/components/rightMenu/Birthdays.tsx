import Image from "next/image"
import Link from "next/link";
import { FiGift } from "react-icons/fi";


const Birthdays = () => {
  return (
    <div  className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-4">
       <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Birtdays</span>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">
                    <Image src="https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_640.png"
                        width={38}
                        height={38}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm">Henry Evans</span>
                </div>
                <div className=" flex gap-3 justify-end">
                    <button className="px-1 py-1 bg-green-600  text-sm rounded-lg shadow-md hover:bg-green-700 ">
                        Celebrate
                    </button>
                </div>
            </div>
            {/* Upcomming */}
            <div className="p-4 bg-[#161B22]  rounded-lg flex items-center gap-4"> 
                <FiGift className="h-4 w-4 cursor-pointer text-purple-400"/>
                <Link href='/' className="flex flex-col gap-1 text-xs">
                <span className="text-gray-500">Upcomming Birthdays</span>
                <p>see other 16 have upcomig birthday</p>
                </Link>
            </div>
    </div>
  )
}

export default Birthdays
