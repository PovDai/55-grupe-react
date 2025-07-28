import './CookieClicker.css'
import { useState } from 'react';
export function CookieClicker() {

    const [count, setCount] = useState(0);
    

    function handeClick() {
    
        setCount(count=>count+1);
    }
    
    function handeReset() {
        
        setCount(0)
        setCount(()=>0)
    }
    function minusClick() {
        setCount(count=>count-1)
    }
   

    
    return (
        
        <div>
            <h1>Cookie clicker</h1>
            <p className='count'>{count}</p>
            <button onClick={handeClick} className='btn'>+</button>
            <button onClick={handeReset} className='btn'>Reset</button>
            <button onClick={minusClick} className='btn'>-</button>
        </div>
    )
}