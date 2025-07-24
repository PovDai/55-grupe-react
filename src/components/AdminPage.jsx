import { useState } from "react"

export function AdminPage() {
    const [skaicius, setSkaicius] = useState(0);
    function click() {
        setSkaicius(skaicius + 1)
       
    }
    
     if (skaicius > 3) {
            alert ('Mygtyka paspaudei daugiau negu 3 kartus')
            
     }
    
    return (
        <div>
       
        <button onClick={click}>Clicked me {skaicius} </button>
        </div>
    )
}