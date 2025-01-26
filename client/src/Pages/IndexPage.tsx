import PostBox from "../Components/PostBox";
import posts from "../../public/Data/DummyData";
interface HomeProps {
  categories?: string;
}

const Home = ({ categories }: HomeProps) => {
  let totalPosts = posts;
  switch (categories) {
    case "Latest": {
      totalPosts.sort((a, b) => a.timePosted - b.timePosted);
      break;
    }
    case "Popular": {
      totalPosts.sort(
        (a, b) => b.numLikes + b.numDislikes - (a.numLikes + a.numDislikes)
      );
      break;
    }
    case "Oldest": {
      totalPosts.sort((a, b) => b.timePosted - a.timePosted);
      break;
    }
    case "": {
      totalPosts = posts;
      break;
    }
  }
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:place-items-center gap-2">
      {/* {Array.from({ length: 6 }, (_, i) => (
        <PostBox key={i} />
      ))} */}
      {posts.map((post, index) => (
        <PostBox key={index} {...post} />
      ))}
    </div>
  );
};

export default Home;
