import { useState } from "react"
import { FaCircleExclamation, FaPencil } from "react-icons/fa6"

const Post = () => {
  const [isActive, setIsActive] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const [hasHttps, setHasHttps] = useState(false)
  const [hasDomain, setHasDomain] = useState(false)
  const [preview, setPreview] = useState(null)
  const defaultImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setHasValue(value.length > 0)

    setHasHttps(value.startsWith("https://"))

    const domainPattern = /^https:\/\/.+\..+/
    setHasDomain(domainPattern.test(value))
  }

  return (
    <section className=" flex flex-col  gap-2 border border-zinc-600 rounded-md p-3">
      <div className="flex">
        <div className=" select-none flex flex-col items-center gap-4">
          <label
            className="relative cursor-pointer group"
            htmlFor="profile-pic-input"
          >
            <div className="size-9 rounded-full overflow-hidden">
              <img
                src={preview || defaultImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-full flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <FaPencil />
                </div>
              </div>
            </div>
          </label>

          <input
            type="file"
            id="profile-pic-input"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <div className="flex flex-col gap-2 w-[90%] px-3">
          {isActive && (
            <div className=" select-none flex gap-4 items-center">
              <input
                placeholder="Username"
                className=" w-fit bg-transparent outline-none border border-zinc-600/35 rounded py-1 px-2"
              />
              <div className="hidden md:flex  gap-1.5 items-center animate-pulse ">
                <span>
                  <FaCircleExclamation />
                </span>
                <span className="text-sm">No Account required!</span>
              </div>
            </div>
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
            <p className="select-none hidden md:block text-red-400 border border-red-400 rounded-md py-1 px-3 text-sm">
              URL must start with "https://"
            </p>
          )}
          {hasValue && !hasDomain && (
            <p className=" select-none block text-red-400 border border-red-400 rounded-md py-1 px-3 text-sm">
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
