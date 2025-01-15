import Navbar from "./Components/Navbar"
import PostButtom from "./Components/PostButtom"
import Screen from "./Layout/Screen"
import Home from "./Pages/Home"
import Post from "./Pages/Post"

const App = () => {
  return (
    <Screen>
      <Navbar />
      <Post />
      <Home />
      <PostButtom />
    </Screen>
  )
}

export default App
