import { useState } from "react"
import Body from "./components/Body"
import Header from "./components/Header"
import Meme from "./components/Meme"
import Navbar from "./components/Navbar"

function App() {
  const [user, setUser] = useState<string>("Joe");
  return (
    <>
      {/* <Navbar />
      <Meme /> */}
      <Header user={user} />
      <Body user={user} />
    </>
  )
}

export default App
