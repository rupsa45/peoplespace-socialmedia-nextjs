import Image from "next/image"
import { BsEmojiSmileFill } from "react-icons/bs";
import { MdAddPhotoAlternate } from "react-icons/md";
import { BiSolidVideoPlus } from "react-icons/bi";

const AddPost = () => {
  return (
    <div className="p-4 bg-[#171d27] shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image src="/image2.jpg"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            placeholder='What is happening?!'
            className="bg-[#292E36] w-full p-2 text-lg resize-none border-none rounded-lg "
          ></textarea>
          <BsEmojiSmileFill className='w-5 h-5 cursor-pointer self-end text-yellow-400' />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <MdAddPhotoAlternate className="w-5 h-5" />
            <BiSolidVideoPlus className="w-5 h-5" />
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full 
            shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Post
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddPost
