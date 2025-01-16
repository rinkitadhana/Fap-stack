import { CiShoppingTag } from "react-icons/ci";
import { FaTag } from "react-icons/fa";

function Tags({ tagName }: { tagName: string }) {
  return (
    <div className="flex gap-2 items-center bg-gray-300 text-gray-600 rounded-full w-min px-2">
      <FaTag className="size-3" />
      <p className="font-bold text-sm">{tagName}</p>
    </div>
  );
}

export default Tags;
