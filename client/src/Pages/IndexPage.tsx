import PostBox from "../Components/PostBox";
import posts from "../../public/Data/DummyData";
interface HomeProps {
  categories?: string;
}

const Home = ({ categories }: HomeProps) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:place-items-center gap-2">
      {/* {Array.from({ length: 6 }, (_, i) => (
        <PostBox key={i} />
      ))} */}
      {!categories &&
        posts.map((post, index) => <PostBox key={index} {...post} />)}
    </div>
  );
};

export default Home;
