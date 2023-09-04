import { useState } from "react"

interface FormInput {
    firstName: string;
    lastName: string;
}

export default function Form() {
    const [formData, setFormData] = useState<FormInput>({firstName: "", lastName: ""});
    
    function handleChange(event: any){
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name]: event.target.value
            }
        })
    }

    console.log(formData)
    return (
        <>
        <form action="">
            first Name: {formData.firstName}
            <br />
            <input type="text" placeholder="First name..." name="firstName" onChange={handleChange} />
            last Name: {formData.lastName}
            <br />
            <input type="text" placeholder="Last name" name="lastName" onChange={handleChange} />
        </form>
        </>
    )
}