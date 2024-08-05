import Post from "./Post"


const Feed = () => {
  return (
    <div className="p-4 bg-[#171d27] shadow-md rounded-lg flex flex-col gap-12">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed
