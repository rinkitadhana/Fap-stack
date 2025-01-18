import { FaTag } from "react-icons/fa"

function Tags({ tagName }: { tagName: string }) {
  return (
    <div className="flex gap-2 items-center bg-gray-400/10 text-gray-400 rounded-full w-min px-2">
      <FaTag className="size-3" />
      <p className="font-bold text-sm">{tagName}</p>
    </div>
  )
}

export default Tags
