import { useState } from "react"

interface FormInput {
    firstName: string;
    lastName: string;
    email: string;
}

export default function Form() {
    const [formData, setFormData] = useState<FormInput>({firstName: "", lastName: "", email: ""});
    
    function handleChange(event: any){
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
        <form action="">
            <h4>first Name: {formData.firstName}</h4>
            <input 
                type="text" 
                placeholder="First name..." 
                name="firstName" 
                onChange={handleChange} 
                value={formData.firstName}
            />
            <h4>last Name: {formData.lastName}</h4>
            <input 
                type="text" 
                placeholder="Last name..." 
                name="lastName" 
                onChange={handleChange} 
                value={formData.lastName}
            />
            <h4>email: {formData.email}</h4>
            <input 
                type="email" 
                placeholder="Email address..." 
                name="email" 
                onChange={handleChange} 
                value={formData.email}
            />
        </form>
        </>
    )
}