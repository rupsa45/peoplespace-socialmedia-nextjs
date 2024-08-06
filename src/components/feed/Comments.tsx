import Image from "next/image"
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";

import { BiLike } from "react-icons/bi";


const Comments = () => {
  return (
    <div className="">
      {/* {WRITE} */}
      <div className="flex items-center gap-4">
        <Image
          src="/avatar1.jpg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between  rounded-xl  text-sm px-6 py-2 w-full">
          <input type="text" placeholder="write a comment..." className=" bg-transparent outline-none flex-1" />
          <BsEmojiSmileFill className='w-5 h-5 cursor-pointer text-yellow-300' />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://img.freepik.com/free-vector/smiling-young-girl-vector-portrait_1308-166125.jpg?t=st=1722830502~exp=1722834102~hmac=3851887e9ff8a2739c593b08ef1b65a726624c74ca515a92172158239e75d21b&w=360"
            alt=""
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Hem</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime quae, unde labore sit natus facilis reprehenderit rerum voluptas totam quibusdam?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 ">
              <div className="flex items-center gap-4">
              <BiLike className="h-5 w-5 cursor-pointer" />
              <span className=" bg-slate-500">|</span>
              <span className="text-gray-500">123 Likes</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
          {/* ICON */}
          <IoIosMore className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Comments
