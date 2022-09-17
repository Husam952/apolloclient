import { useState } from 'react';

export default function SelectState() {
    const [text, setText] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
    }
    
    return (
            <form onSubmit={handleClick}>
                <input type="text" value={text}  />
                <input type="submit" value="Submit Query"/>
            </form>
    );


}