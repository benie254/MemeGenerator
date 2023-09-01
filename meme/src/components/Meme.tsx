import MemeData from '../data/MemeData';
import {useState} from "react";
import Contact from '../data/Contact';

interface MemeInterface {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

interface ContactInterface {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isFav: boolean;
}

export default function Meme() { 
    const memeData = MemeData.data.memes;
    let randomNum = Math.floor(Math.random() * memeData.length);

    const [memeGen, setMemeGen] = useState<MemeInterface>({id:'',name: '',url:'',width:0,height:0,box_count:0});
    const [topText, setTopText] = useState<string>("TOP TEXT");
    const [bottomText, setBottomText] = useState<string>("BOTTOM TEXT");

    let myContact = Contact.data.contacts[0];
    const [contact, setContact] = useState<ContactInterface | undefined>(myContact);

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact, 
                isFav: !prevContact.isFav
            }
        })
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

            <div>
                <button onClick={toggleFavorite}>
                    Toggle
                </button>
                {
                    contact &&
                    <div>
                        <h2>{contact.firstName} {contact.lastName}</h2>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>

                }
                {
                            contact && contact.isFav ?
                            <p>Is Favorite</p>
                            :
                            <p>Not favorite</p>
                        }
            </div>
        </>
    )
}