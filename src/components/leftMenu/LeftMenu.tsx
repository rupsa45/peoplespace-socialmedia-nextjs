import Link from "next/link"

import Image from "next/image"
import { MdLocalPostOffice } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import { MdStore } from 'react-icons/md';
import { IoMdAlbums } from "react-icons/io";
import { IoVideocamSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import ProfileCard from "./ProfileCard";
import Ad from "../Ad";


const LeftMenu = ({type}:{type: "home" | "profile"}) => {
  return (
    <div className="flex flex-col gap-6">
      {
        type === "home" && <ProfileCard/>
      }
      <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm flex flex-col gap-2">
        <Link href='/' className="flex items-center gap-3 p-2 hover:bg-[#292E36] rounded-lg">
          < MdLocalPostOffice className="h-4 w-4"/>
          <span>My Post</span>
        </Link>
        <Link href='/' className="flex items-center gap-3 p-2 hover:bg-[#292E36] rounded-lg">
          <  IoIosNotifications className="h-4 w-4"/>
          <span>Notification</span>
        </Link>
        <Link href='/' className="flex items-center gap-3 p-2 hover:bg-[#292E36] rounded-lg">
          < MdStore className="h-4 w-4"/>
          <span>Marketplace</span>
        </Link>
        <Link href='/' className="flex items-center gap-3 p-2 hover:bg-[#292E36] rounded-lg">
          <MdEvent className="h-4 w-4"/>
          <span>Events</span>
        </Link>
        <Link href='/' className="flex items-center gap-3 p-2 hover:bg-[#292E36] rounded-lg">
          < IoMdAlbums className="h-4 w-4"/>
          <span>Album</span>
        </Link>
        <Link href='/' className="flex items-center gap-3 p-2 hover:bg-[#292E36] rounded-lg">
          < IoVideocamSharp className="h-4 w-4"/>
          <span>Videos</span>
        </Link>
        <Link href='/' className="flex items-center gap-3 p-2 hover:bg-[#292E36] rounded-lg">
          < IoSettings className="h-4 w-4"/>
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  )
}

export default LeftMenu
