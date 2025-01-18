const Category = () => {
  return (
    <section className="border border-zinc-700 rounded-md p-3 flex items-center gap-3">
      <span>Filter :</span>
      <div className="flex flex-wrap gap-2">
        <button className=" cat-btn">Latest</button>
        <button className=" cat-btn">Popular</button>
        <button className=" cat-btn">Oldest</button>
      </div>
    </section>
  )
}

export default Category
