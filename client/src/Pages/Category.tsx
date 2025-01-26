import { useState } from "react";

interface CategoryProps {
  setCategory: (category: string) => void;
}

const Category = ({ setCategory }: CategoryProps) => {
  const [openCategory, setOpenCategory] = useState("");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.target.textContent);
    setOpenCategory(e.target.textContent);
  };
  return (
    <section className="border h-full border-zinc-700 rounded-md p-3 flex flex-col gap-2">
      <h1 className=" text-lg opacity-60 font-semibold">
        Filter & Categories.
      </h1>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={(e) => handleClick(e)}
          className={`${
            openCategory === "Latest"
              ? "bg-primaryColor text"
              : "hover:bg-zinc-800"
          } cat-btn`}
        >
          Latest
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className={`${
            openCategory === "Popular"
              ? "bg-primaryColor text"
              : "hover:bg-zinc-800"
          } cat-btn`}
        >
          Popular
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className={`${
            openCategory === "Oldest"
              ? "bg-primaryColor text"
              : "hover:bg-zinc-800"
          } cat-btn`}
        >
          Oldest
        </button>
      </div>
    </section>
  );
};

export default Category;
