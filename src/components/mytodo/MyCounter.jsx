import { useState } from "react";
import './MyCounter.css';

export function Counter() {
    const [count, setCount] = useState(0);
    const [reset, setReset] = useState(0);

    const handleReset = () => {
        setCount(0);
        setReset(prevReset => prevReset + 1);
    };

    return (
        <div className="counter">
            <p>Jūs paspaudėte {count} kartus</p>
            <button onClick={() => setCount(count + 1)}>
                Add+1
            </button>
            
            <button onClick={handleReset}>
                Reset
            </button>
            
            <p>Jūs resetinote {reset} kartus</p>
        </div>
    );
}