import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import PostButtom from "./Components/PostButtom"
import Screen from "./Layout/Screen"
import Category from "./Pages/Category"
import Home from "./Pages/Home"
import Post from "./Pages/Post"

const App = () => {
  return (
    <Screen>
      <div className=" flex flex-col gap-2">
        <Navbar />
        <Post />
        <Category />
        <Home />
        <Footer />
      </div>
      <PostButtom />
    </Screen>
  )
}

export default App
