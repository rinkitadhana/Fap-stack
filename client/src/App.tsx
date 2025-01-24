import Footer from "./Components/PageComponents/Footer"
import Navbar from "./Components/PageComponents/Navbar"
import PostButtom from "./Components/PageComponents/PostButtom"
import Screen from "./Layout/Screen"
import Category from "./Pages/Category"
import Post from "./Pages/Post"
import IndexPage from "./Pages/IndexPage"

const App = () => {
  return (
    <Screen>
      <div className=" flex flex-col gap-2">
        <Navbar />
        <div className=" flex md:flex-row flex-col gap-2">
          <div className=" md:basis-1/2">
            <Post />
          </div>
          <div className=" md:basis-1/2">
            <Category />
          </div>
        </div>

        <IndexPage />
        <Footer />
      </div>
      <PostButtom />
    </Screen>
  )
}

export default App
