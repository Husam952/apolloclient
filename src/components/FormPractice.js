import { useState } from 'react';

export default function FormPractice({onCityClick}) {
    const [city, setCity] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        
    }
    
    return (
            <form onSubmit={handleClick}>
                <input type="text" value={city}  />
                <input type="submit" value="Submit Practice"/>
            </form>
    );


}