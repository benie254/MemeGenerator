import { useEffect, useState } from "react"

export default function() {
    const [count, setCount] = useState<number>(0);

    function add(){
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
            console.log("effect function ran");
        },[count]);

    return (
        <>
            <div>
                <h2>The count is {count}</h2>
                <button onClick={add}>
                    Add
                </button>
            </div>
        </>
    )
}