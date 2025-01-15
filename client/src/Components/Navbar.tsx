import { LuSquarePen } from "react-icons/lu"

const Navbar = () => {
  return (
    <nav className=" flex border border-zinc-600 rounded-xl my-4 py-2 justify-between items-center md:px-2">
      <a href="" className=" text-xl font-semibold px-3">
        Fap-stack
      </a>
      <a
        href=""
        className=" flex gap-1.5 items-center border border-zinc-600 bg-red-500 hover:bg-red-400 transition duration-200 font-medium text-white rounded-md px-2 py-1"
      >
        <LuSquarePen />
        Post
      </a>
    </nav>
  )
}

export default Navbar
