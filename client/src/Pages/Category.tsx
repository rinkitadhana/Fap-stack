interface CategoryProps {
  setCategory: (category: string) => void;
}

const Category = ({ setCategory }: CategoryProps) => {
  return (
    <section className="border h-full border-zinc-700 rounded-md p-3 flex flex-col gap-2">
      <h1 className=" text-lg opacity-60 font-semibold">
        Filter & Categories.
      </h1>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setCategory("Latest")} className=" cat-btn">
          Latest
        </button>
        <button onClick={() => setCategory("Popular")} className=" cat-btn">
          Popular
        </button>
        <button onClick={() => setCategory("Oldest")} className=" cat-btn">
          Oldest
        </button>
      </div>
    </section>
  );
};

export default Category;
