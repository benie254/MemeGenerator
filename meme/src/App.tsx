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

  const allBoxes = boxes.map(
    (box) => (
      <Box boxId={box.id} boxOn={box.on} />
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
