import { useEffect, useState } from "react"

interface StarWars {
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: [];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export default function() {
    const [count, setCount] = useState<number>(0);
    const [swData, setSwData] = useState<StarWars[]>([]);
 
    function add(){
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
            fetch(`https://swapi.dev/api/people/${count}`).then(
                res => res.json()
            ).then(
                data => setSwData(data)
            );
        },[count]);

    return (
        <>
            <div>
                <h2>The count is {count}</h2>
                <button onClick={add}>
                    Get Next Character
                </button>
                {
                    swData && 
                    <pre>{JSON.stringify(swData, null, 2)}</pre>
                }
            </div>
        </>
    )
}