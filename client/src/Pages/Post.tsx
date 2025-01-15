const Post = () => {
  return (
    <section className=" flex flex-col border border-zinc-600 rounded p-3">
      <div className=" flex  ">
        <div className=" ">
          <img
            className=" size-9 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
        </div>
        <div className="w-[90%] px-3">
          <input
            placeholder="Your homies are waiting for your link!"
            className="post-input"
          />
        </div>
      </div>
      <div className=" flex justify-end">
        <button className=" select-none border border-zinc-600 bg-red-500 hover:bg-transparent transition duration-200 font-medium text-white rounded-md px-3 py-1">
          Post
        </button>
      </div>
    </section>
  )
}

export default Post
