import { useState } from "react";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Boxes from "./data/Boxes";
import Box from "./components/Box";
import JokesData from "./data/JokesData";
import Jokes from "./components/Jokes";
import Form from "./components/Form";
import UserForm from "./components/UserForm";
import Effects from "./components/Effects";

interface BoxesInter {
  id: number;
  on: boolean;
}

function App() {

  let boxArray = Boxes;
  const [boxes, setBoxes] = useState<BoxesInter[]>(boxArray);

  const [msg, setMsg] = useState<String[]>(["a","b"]);
  
  function clear() {
    setMsg(prevMsg => prevMsg = []);
  }

  function boxClicked(id: number) {
    setBoxes(prevBoxes => {
      return prevBoxes.map(
        (box) => box.id === id ? {...box, on: !box.on} : box
      )
    })
}

  const allBoxes = boxes.map(
    (box) => (
      <Box key={box.id} boxId={box.id} boxOn={box.on} handleClick={boxClicked} />
    )
  )

  const allJokes = JokesData.map(
    (joke) => (
      <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    )
  )

  return (
    <>
      {/* <Navbar />
      <Meme /> */}
      <div>
        {/* <Form /> */}
        {/* <UserForm /> */}
        <Effects />
      </div>
      {/* <main>
        {
          msg.length ?
          <h1>You have {msg.length} unread { msg.length > 1 ? 'message(s)' : 'message' }</h1>
          :
          <h1>You're all caught up</h1>
        }
        <button onClick={clear}>Clear messages</button>
      {allJokes}
      </main> */}
    </>
  )
}

export default App
