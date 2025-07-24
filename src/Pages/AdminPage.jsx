import { useState } from "react";

export function AdminPage() {
    const [skaicius, setSkaicius] = useState(0);
    const [antras, setAntras] = useState(2);
    
    function click() {
        setSkaicius(skaicius + 1);
    }
    
    function dalinti() {
        setAntras(antras / 2);
    }

    let count = 0;
    function naujas() {
        if (skaicius > 4) {
            return `Jūs paspaudėte jau ${skaicius} kartų`;
        }
        if (antras < 1) {
            return <div>
                    <p>Tikriausiai atsirado paveiksliukas</p>
                    <img src="/img/movie-1753175346935-643197.jpg" alt="Paveikslėlis" />
                </div>
        }
        return null;
    }
    
    return (
        <>
            <div className="container">
                <button onClick={click}>Pridėti {skaicius}</button>
                <p>{naujas()}</p>
            </div>
            <div className="container">
                <button onClick={dalinti}>Dalinti {antras}</button>
            
            </div>
        </>
    );
}