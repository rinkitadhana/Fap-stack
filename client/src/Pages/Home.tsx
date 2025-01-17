import FapPost from "../Components/FapPost"
import PostBox from "../Components/PostBox"

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <PostBox />
      <PostBox />
      <PostBox />
      <FapPost />
    </div>
  )
}

export default Home
