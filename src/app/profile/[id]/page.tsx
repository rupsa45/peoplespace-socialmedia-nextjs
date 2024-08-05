import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"


const page = () => {
  return (
    <div className="flex gap-6 pt-6">
    <div className="hidden xl:block w-[20%]">
      <LeftMenu type="profile"/>
    </div>
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-64 relative">
            <Image
              src="https://cdn.pixabay.com/photo/2024/07/17/08/53/sunrise-8901014_1280.jpg"
              alt=""
              fill
              className="rounded-md object-cover"
            />
            <Image
              src="/image6.jpg"
              alt=""
              width={128}
              height={128}
              className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-black object-cover"
            />
          </div>
          <h1 className="mt-20 mb-20 text-4xl font-medium">Emily Parker</h1>
          <div className="flex items-center justify-center gap-12 mb-5">
            <div className="flex flex-col items-center">
              <span className="font-medium">123</span>
              <span className="text-sm">posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">1.23k</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">123</span>
              <span className="text-sm">Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:block w-[30%]">
      <RightMenu userId="test"/>
    </div>
  </div>
  )
}

export default page
