import { LuSquarePen } from "react-icons/lu"

const Navbar = () => {
  return (
    <nav className=" select-none flex border border-zinc-600 rounded-md  py-2 justify-between items-center px-2">
      <a href="" className=" text-xl font-semibold">
        Fap-stack
      </a>
      <a
        href=""
        className=" flex gap-1.5 select-none items-center border border-zinc-600 bg-red-500 hover:bg-transparent transition duration-200 font-medium text-white rounded-md px-2 py-1"
      >
        <LuSquarePen />
        Post
      </a>
    </nav>
  )
}

export default Navbar
