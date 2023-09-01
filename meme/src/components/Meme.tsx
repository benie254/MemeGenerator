import MemeData from '../data/MemeData';
import {useState} from "react";

interface MemeInterface {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

export default function Meme() { 
    const memeData = MemeData.data.memes;
    let randomNum = Math.floor(Math.random() * memeData.length);

    const [memeGen, setMemeGen] = useState<MemeInterface>({id:'',name: '',url:'',width:0,height:0,box_count:0});
    const [topText, setTopText] = useState<string>("TOP TEXT");
    const [bottomText, setBottomText] = useState<string>("BOTTOM TEXT");

    const thingsArray = ["Thing 1", "Thing 2"];
    const [things, setThings] = useState<string[]>(thingsArray);

    function addItem() {
        setThings(prevThings => [...prevThings, `Thing ${things.length + 1}`]);
    }

    function handleMeme() {
        let randomMeme = memeData[randomNum];
        setMemeGen(randomMeme);
        return randomMeme;
    }

    function handleTopText(event: React.ChangeEvent<HTMLInputElement>) {
        setTopText(event.currentTarget.value);
    }
    function handleBottomText(event: React.ChangeEvent<HTMLInputElement>) {
        setBottomText(event.currentTarget.value);
    }

    return (
        <>
        <button onClick={addItem}>Add</button>
        <p>{things}</p>
            <div className="memeForm">
                <form action="">
                    <input type="text" onChange={handleTopText} placeholder="Top text" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" onChange={handleBottomText} placeholder="Bottom text" />
                    <br />
                    <button type="button" onClick={handleMeme}>Get a new meme image 🖼</button>
                    {
                        memeGen.url &&
                        <div className="meme-wrapper">
                            <div className="meme-card" style={{backgroundImage:`url(${memeGen.url})`}}>
                                <h1 className="text-top">{topText}</h1>
                                <h1 className="text-bottom">{bottomText}</h1>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </>
    )
}