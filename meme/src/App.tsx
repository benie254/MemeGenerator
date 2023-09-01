import { useState } from "react";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Boxes from "./data/Boxes";

interface BoxesInter {
  id: number;
  on: boolean;
}

function App() {

  let boxArray = Boxes;
  const [boxes, setBoxes] = useState<BoxesInter[]>(boxArray);

  const allBoxes = boxes.map(
    (box) => (
        <div>
          <div className="boxes" key={box.id}></div> <br />
        </div>
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
