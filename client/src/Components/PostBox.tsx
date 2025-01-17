const PostBox = () => {
  const link =
    "https://github.com/rinkitadhana/Fap-stack//github.com/rinkitadhana/Fap-stack"
  return (
    <div className=" flex flex-col gap-4 border border-zinc-600 rounded-md p-4">
      <div className=" flex justify-between items-center">
        <div className=" flex gap-2 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              className=" select-none size-8 rounded-full"
              alt="profile"
            />
            <span className="font-medium">Username</span>
          </div>
          <div className=" text-sm opacity-75">• 15 hrs ago</div>
        </div>
        <div>Goto</div>
      </div>
      <div className=" select-none ">
        <div className="hover:brightness-75 transition-all duration-300 cursor-pointer relative">
          <img
            className="  rounded-md w-full h-[270px] object-cover"
            src="https://i.pinimg.com/736x/18/97/29/189729516ae44062a9d98e74b7394dcf.jpg"
          />
          <a className=" absolute bottom-3 mx-3 bg-black/50 backdrop-blur-[2px] px-2 py-1 rounded-md">
            {link}
          </a>
        </div>
        <span className=" text-sm opacity-75">From loda.io</span>
      </div>
      <div className=" flex gap-2">
        <div className=" border border-zinc-600 rounded-md py-1 px-3">
          Indian
        </div>
        <div className=" border border-zinc-600 rounded-md py-1 px-3">vpn</div>
      </div>
      <div></div>
    </div>
  )
}

export default PostBox
