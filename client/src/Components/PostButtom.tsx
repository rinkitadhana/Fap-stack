import { LuSquarePen } from "react-icons/lu"

const PostButtom = () => {
  return (
    <button
      title="post"
      className=" fixed right-5 bottom-5 text-2xl border border-zinc-600 rounded-md p-2 bg-red-500 hover:bg-transparent transition-colors duration-200 select-none"
    >
      <LuSquarePen />
    </button>
  )
}

export default PostButtom
