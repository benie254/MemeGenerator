import { useState } from "react"

interface FormInput {
    firstName: string;
    lastName: string;
    email: string;
    comments: string;
    isFriendly: boolean;
}

export default function Form() {
    const [formData, setFormData] = useState<FormInput>({
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "",
        isFriendly: true
    });
    
    function handleChange(event: any){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
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
            <h4>comment: {formData.comments}</h4>
            <textarea 
                placeholder="Comments..."
                name="comments"
                onChange={handleChange} 
                value={formData.comments}
            />
            <h4>{formData.isFriendly ? "Is Friendly" : "NOT friendly"}</h4>
            <input 
                type="checkbox"
                name="isFriendly"
                onChange={handleChange} 
                checked={formData.isFriendly}
            />
            <label htmlFor="friendly">Are you friendly?</label>
        </form>
        </>
    )
}