import PostBox from "../Components/PostBox"

const Home = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:place-items-center gap-2">
      {Array.from({ length: 6 }, (_, i) => (
        <PostBox key={i} />
      ))}
    </div>
  )
}

export default Home
