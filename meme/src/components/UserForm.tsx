import { useState } from "react"

interface FormInput {
    email: string;
    password: string;
    password2: string;
    newsletter: boolean;
    age: string;
    city: string;
}

export default function UserForm() {
    const [formData, setFormData] = useState<FormInput>({
        email: "",
        password: "",
        password2: "",
        newsletter: false,
        age: "",
        city: ""
    });

    function handleChange(event: any){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    function handleSubmit(event: any){
        event.preventDefault();
        let res;
        if (formData.password === formData.password2){
            res = "Successfully signed up";
            console.log(res, formData);
            formData.newsletter && console.log("Thanks for signing up for our newsletter" );
        } else {
            res = "Passwords do not match";
            console.log(res);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password2">Confirm Password</label>
                <input 
                    type="password" 
                    name="password2"
                    id="password2"
                    value={formData.password2}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="newsletter">
                    <input 
                        type="checkbox"
                        name="newsletter"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange} 
                    />
                    I want to join the newsletter
                </label>
                <br />
                <fieldset>
                    <legend>Age Range</legend>
                    <label htmlFor="teenager">Teenager</label>
                    <input 
                        type="radio" 
                        name="age"
                        id="teenager"
                        value="teenager"
                        checked={formData.age === 'teenager'}
                        onChange={handleChange} 
                    />
                    <label htmlFor="adult">Adult</label>
                    <input 
                        type="radio" 
                        name="age"
                        id="adult"
                        value="adult"
                        checked={formData.age === 'adult'}
                        onChange={handleChange} 
                    />
                    <label htmlFor="grownup">Grownup</label>
                    <input 
                        type="radio" 
                        name="age"
                        id="grownup"
                        value="grownup"
                        checked={formData.age === 'grownup'}
                        onChange={handleChange} 
                    />
                </fieldset>
                <br />
                <label htmlFor="city">City</label>
                <select 
                    name="city" 
                    id="city"
                    value={formData.city}
                    onChange={handleChange} 
                >
                    <option value="">--choose city--</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Kitui">Kitui</option>
                    <option value="Mombasa">Mombasa</option>
                </select>
                <br /><br />
                <button>Sign Up</button>
            </form>
        </>
    )
}