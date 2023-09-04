import { useState } from "react";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Boxes from "./data/Boxes";
import Box from "./components/Box";

interface BoxesInter {
  id: number;
  on: boolean;
}

function App() {

  let boxArray = Boxes;
  const [boxes, setBoxes] = useState<BoxesInter[]>(boxArray);

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

  return (
    <>
      {/* <Navbar />
      <Meme /> */}
      <main>
        <h1>Boxes</h1>
        {allBoxes}
      </main>
    </>
  )
}

export default App
