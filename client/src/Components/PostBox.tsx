import { useEffect, useState } from "react"
import { useRef } from "react"
import { IoIosFlag, IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io"
import { MdOutlineVpnKey, MdOutlineVpnKeyOff, MdShare } from "react-icons/md"

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
        <div className="  flex gap-2 items-center">
          <div className=" overflow-hidden  flex gap-2 items-center">
            <img
              src="./Img/Avatar/woman.png"
              className=" select-none size-8 rounded-full"
              alt="profile"
            />
            <span className="font-medium ">{username}</span>
          </div>
          <div className="  text-sm opacity-75 ">• {timePosted} hrs ago</div>
        </div>
        <div
          className={`  select-none flex gap-1.5 items-center  rounded-md px-3 py-1  ${
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
          href={urlPost}
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
      <div className="flex justify-between gap-4 items-center"></div>
      <div className=" flex justify-between gap-4   items-center">
        {/* <div className="flex gap-2 items-center">
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
        </div> */}
        <div className=" hidden"> {numShares}</div> //error hatane ke lia kia
        hai
        <div>
          <button
            title="report"
            className=" p-2  rounded-md text-2xl bg-zinc-800 text-zinc-300 transition-all duration-200 hover:text-red-400 "
          >
            <IoIosFlag />
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <div className=" select-none flex items-center ">
            <div>
              <button
                title="like"
                className=" p-2 rounded-l-md text-2xl bg-zinc-800  text-zinc-300 hover:text-green-600 transition-all duration-200"
              >
                <IoMdThumbsUp />
              </button>
            </div>
            <div className=" p-2 mx-auto font-semibold  bg-zinc-950   flex justify-center  gap-1 items-center">
              <p>{numLikes}</p>/<p>{numDislikes}</p>
            </div>

            <div>
              <button
                title="dislike"
                className=" p-2  rounded-r-md text-2xl bg-zinc-800 text-zinc-300 hover:text-red-600 transition-all duration-200"
              >
                <IoMdThumbsDown />
              </button>
            </div>
          </div>
          <div>
            <button
              title="share"
              className=" p-2  rounded-md text-2xl bg-zinc-800 text-zinc-300 transition-all duration-200 hover:text-blue-500 "
            >
              <MdShare />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostBox
