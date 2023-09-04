import { useState } from "react";

interface JokesProps {
    setup: string;
    punchline: string;
}

export default function Jokes({setup, punchline}: JokesProps) {
    const [isShown, setIsShown] = useState<boolean>(false);
    
    function togglePunchline() {
        setIsShown(prevPunchline => !prevPunchline);
    }

    return (
        <>
            <div>
                {
                    setup && 
                    <h3>{setup}</h3>
                }
                {
                    isShown && 
                    <p>{punchline}</p>
                }
                <button onClick={togglePunchline}>{isShown ? 'Hide' : 'Show'} Punchline</button>
            </div>
            <hr />
        </>
    )
}