import Troll from '../../public/assets/Troll.png';

export default function Navbar() {
    return (
        <nav>
            <img className="brand-img" src={Troll} alt="" />
            <h2 className="brand">Meme Generator</h2>
            <h4 className="tagline">React Course - Project 3</h4>
        </nav>
    )
}