import Footer from "./Components/PageComponents/Footer";
import Navbar from "./Components/PageComponents/Navbar";
import PostButtom from "./Components/PageComponents/PostButtom";
import Screen from "./Layout/Screen";
import Category from "./Pages/Category";
import Post from "./Pages/Post";
import IndexPage from "./Pages/IndexPage";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("");
  return (
    <Screen>
      <div className=" flex flex-col gap-2">
        <Navbar />
        <div className=" flex md:flex-row flex-col gap-2">
          <div className=" md:basis-1/2">
            <Post />
          </div>
          <div className=" md:basis-1/2">
            <Category setCategory={setCategory} />
          </div>
        </div>

        <IndexPage categories={category} />
        <Footer />
      </div>
      <PostButtom />
    </Screen>
  );
};

export default App;
