import { useState } from "react"

interface FormInput {
    firstName: string;
    lastName: string;
    email: string;
    comments: string;
    isFriendly: boolean;
    employment: string;
    favColor: string;
}

export default function Form() {
    const [formData, setFormData] = useState<FormInput>({
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: "",
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
            <label htmlFor="isFriendly">
                Are you friendly?
                <input 
                    id="isFriendly"
                    type="checkbox"
                    name="isFriendly"
                    onChange={handleChange} 
                    checked={formData.isFriendly}
                />
            </label>
            <h4>Employment: {formData.employment}</h4>
            <fieldset>
                <legend>Employment Status</legend>
                <input 
                    id="unemployed"
                    type="radio"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange} 
                    checked={formData.employment === 'unemployed'}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input 
                    id="part-time"
                    type="radio"
                    name="employment"
                    value="part-time"
                    onChange={handleChange} 
                    checked={formData.employment === 'part-time'}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input 
                    id="full-time"
                    type="radio"
                    name="employment"
                    value="full-time"
                    onChange={handleChange} 
                    checked={formData.employment === 'full-time'}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>
            <h4>Fav color: {formData.favColor}</h4>
            <label htmlFor="favColor">Favorite Color</label>
            <select id="favColor" name="favColor" value={formData.favColor} onChange={handleChange}>
                <option value="">--choose one---</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
        </form>
        </>
    )
}