import { useState } from "react"

const Post = () => {
  const [isActive, setIsActive] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const [hasHttps, setHasHttps] = useState(false)
  const [hasDomain, setHasDomain] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setHasValue(value.length > 0)

    setHasHttps(value.startsWith("https://"))

    const domainPattern = /^https:\/\/.+\..+/
    setHasDomain(domainPattern.test(value))
  }

  return (
    <section className=" flex flex-col gap-4 border border-zinc-600 rounded-md p-3">
      <div className=" flex  ">
        <div className=" ">
          <img
            className=" size-9 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
        </div>
        <div className="flex flex-col gap-2 w-[90%] px-3">
          {isActive && (
            <input
              placeholder="Username"
              className=" w-fit bg-transparent outline-none border border-zinc-600/35 rounded py-1 px-2"
            />
          )}
          <input
            onChange={handleInputChange}
            onFocus={() => setIsActive(true)}
            placeholder="Your homies are waiting for your link!"
            className={`  ${
              hasValue && hasDomain && hasHttps ? "text-blue-500" : ""
            } post-input`}
          />
        </div>
      </div>
      <div className=" flex justify-end gap-4 items-center">
        <div className=" flex gap-2 items-center">
          {hasValue && !hasHttps && (
            <p className="hidden md:block text-red-400 border border-red-400 rounded-md py-1 px-3 text-sm">
              URL must start with "https://"
            </p>
          )}
          {hasValue && !hasDomain && (
            <p className="text-red-400 border border-red-400 rounded-md py-1 px-3 text-sm">
              Please enter a valid URL
            </p>
          )}
        </div>
        <button
          disabled={!hasValue}
          className={` ${
            hasValue && hasDomain && hasHttps
              ? "bg-red-500  "
              : "bg-transparent cursor-not-allowed"
          } select-none border border-zinc-600  hover:bg-transparent transition duration-200 font-medium text-white rounded-md px-3 py-1`}
        >
          Post
        </button>
      </div>
    </section>
  )
}

export default Post
