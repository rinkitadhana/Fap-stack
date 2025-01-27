import { useEffect, useState } from "react"
import { useRef } from "react"
import { BiDislike } from "react-icons/bi"
import { BiLike } from "react-icons/bi"
import { FiShare } from "react-icons/fi"
import { MdOutlineVpnKey, MdOutlineVpnKeyOff } from "react-icons/md"

interface PostProps {
  username: string
  timePosted: number
  urlPost: string
  numLikes: number
  numDislikes: number
  numShares: number
  vpnRequired: boolean
}

function PostBox({
  username,
  timePosted,
  urlPost,
  numLikes,
  numDislikes,
  numShares,
  vpnRequired,
}: PostProps) {
  const [isClicked, setIsClicked] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsClicked(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const getDomain = (link: string) => {
    const url = new URL(link)
    return url.hostname
  }

  return (
    <div
      ref={boxRef}
      className={`flex flex-col gap-4 border rounded-md p-4 transition-colors duration-200 ${
        isClicked ? "border-red-500" : "border-zinc-600 "
      }`}
    >
      <div className=" flex justify-between items-center">
        <div className=" flex gap-2 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              className=" select-none size-8 rounded-full"
              alt="profile"
            />
            <span className="font-medium ">{username}</span>
          </div>
          <div className=" text-sm opacity-75 ">• {timePosted} hrs ago</div>
        </div>
        <div
          className={`select-none flex gap-1.5 items-center  rounded-md px-3 py-1  ${
            vpnRequired
              ? "text-green-600/75 bg-green-600/10"
              : "text-red-500/75 bg-red-500/10"
          } `}
        >
          <span className=" text-lg">
            {vpnRequired ? <MdOutlineVpnKey /> : <MdOutlineVpnKeyOff />}
          </span>
          <span className=" font-semibold">VPN</span>
        </div>
      </div>
      <div className=" select-none ">
        <a
          onClick={() => setIsClicked(true)}
          href=""
          target="_blank"
          className="hover:brightness-75 transition-all duration-200 cursor-pointer "
        >
          <div className="relative">
            <img
              className="rounded-md w-full  object-cover"
              src="https://i.pinimg.com/736x/18/97/29/189729516ae44062a9d98e74b7394dcf.jpg"
            />
            <p className="whitespace-nowrap overflow-hidden text-ellipsis absolute bottom-2 right-2 left-2 bg-black/50 backdrop-blur-[2px] px-2 py-1 text-sm rounded-md">
              {urlPost}
            </p>
          </div>
        </a>
        <a
          href=""
          target="_blank"
          className=" text-sm opacity-75 hover:opacity-100 transition-all duration-200"
        >
          From {getDomain(urlPost)}
        </a>
      </div>
      <div className=" flex gap-2"></div>
      <div className=" flex justify-end gap-4  px-4 items-center">
        <div className="flex gap-2 items-center">
          <p className="select-none">{numLikes}</p>
          <button className=" btn">
            <BiLike />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <p className="select-none">{numDislikes}</p>
          <button className=" btn">
            <BiDislike />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <p className="select-none">{numShares}</p>
          <button className=" text-xl">
            <FiShare />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostBox
