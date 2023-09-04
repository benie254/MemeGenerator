import { useState } from "react"

export default function Form() {
    const [name, setName] = useState<String>("");
    function handleChange(event: any){
        setName(event.target.value);
        console.log(name);
    }
    return (
        <>
        <form action="">
            <input type="text" placeholder="First name..." onChange={handleChange} />
            value = {name}
        </form>
        </>
    )
}