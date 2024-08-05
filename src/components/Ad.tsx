import Image from "next/image"
import { IoIosMore } from "react-icons/io";
import { GiRaccoonHead } from "react-icons/gi";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-[#0D1117] rounded-lg shadow-md text-sm">
      {/* TOPS */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsered Ad</span>
        <IoIosMore className='w-5 h-5 cursor-pointer' />
      </div>
      {/* /BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
          <Image src="https://cdn.pixabay.com/photo/2024/06/19/05/37/animal-8839173_640.jpg"
            fill
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <GiRaccoonHead className="h-4 w-4 text-blue-800" />
          <span className="text-xs text-blue-500">Save Wildlife</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {
            size === "sm" ? "Our planet is a breathtaking tapestry of life, with wildlife as its vibrant threads." 
            : size === "md" 
            ?"Every creature, from the majestic lion to the tiniest insect, plays a crucial role in maintaining the delicate balance of our ecosystem. " 
            : "Lets come together to protect these incredible beings and their habitats. Your support can help ensure a future where wildlife thrives."
          }
        </p>
        <button className="p-1.5  bg-[#666769] text-gray-700  text-sm rounded-lg shadow-md hover:bg-gray-400 ">
            Learn More
        </button>
      </div>
    </div>
  )
}

export default Ad
