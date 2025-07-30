// React bibliotekos importas (reikalingas useState hook'ui)
import { useState } from "react";

// TodoItem komponentas, kuris priima tris props:
// - task: objekas su užduoties duomenimis
// - modifyTaskTextFunc: funkcija teksto atnaujinimui
// - modifyTaskCompletionFunc: funkcija užduoties pažymėjimui kaip užbaigtą
export function TodoItem({ task, modifyTaskTextFunc, modifyTaskCompletionFunc }) {
    // State kintamieji:
    const [isEditMode, setIsEditMode] = useState(false); // Ar įjungtas redagavimo režimas
    const [text, setText] = useState(task.text);        // Redaguojamas tekstas

    // Jei įjungtas redagavimo režimas, rodome redagavimo formą
    if (isEditMode) {
        return (
            <li className="d-flex my-3 p-2" key={task.id}
                style={{ backgroundColor: '#f1f1f1' }}>
                {/* Įvesties laukas teksto redagavimui */}
                <input 
                    onChange={(e) => setText(e.target.value)} // Atnaujiname text state kiekvienam pasikeitimui
                    value={text}                              // Rodyti esamą tekstą
                    style={{ display: 'flex', flexGrow: 1 }}  // Stilius, kad užimtų visą likusią vietą
                    type="text" 
                />
                
                {/* Atnaujinimo mygtukas (rodomas tik nebaigtoms užduotims) */}
                {!task.isCompleted && (
                    <button 
                        onClick={() => {
                            modifyTaskTextFunc(task.id, text); // Iškviečiame tėvinį metodą teksto atnaujinimui
                            setIsEditMode(false);              // Išjungiame redagavimo režimą
                        }} 
                        className="btn btn-success btn-sm ms-3"
                    >
                        Update
                    </button>
                )}
                
                {/* Atšaukimo mygtukas (rodomas tik nebaigtoms užduotims) */}
                {!task.isCompleted && (
                    <button 
                        onClick={() => {
                            setText(task.text);      // Grąžiname originalų tekstą
                            setIsEditMode(false);   // Išjungiame redagavimo režimą
                        }} 
                        className="btn btn-secondary btn-sm ms-3"
                    >
                        Cancel
                    </button>
                )}
            </li>
        );
    }

    // Standartinis rodinys (kai redagavimo režimas išjungtas)
    return (
        <li className="d-flex my-3 p-2" key={task.id}
            style={{ backgroundColor: '#f1f1f1' }}>
            {/* Užduoties tekstas */}
            {text}
            
            {/* Redagavimo mygtukas (rodomas tik nebaigtoms užduotims) */}
            {!task.isCompleted && (
                <button 
                    onClick={() => setIsEditMode(true)} // Įjungiame redagavimo režimą
                    className="btn btn-warning btn-sm ms-auto" // ms-auto stumia mygtuką į dešinę
                >
                    Edit
                </button>
            )}
            
            {/* Pašalinimo mygtukas (rodomas tik nebaigtoms užduotims) */}
            {!task.isCompleted && (
                <button 
                    onClick={() => modifyTaskCompletionFunc(task.id)} // Iškviečiame tėvinį metodą užduoties pažymėjimui
                    className="btn btn-danger btn-sm ms-3"          // ms-3 - margin left 3
                >
                    Remove
                </button>
            )}
        </li>
    );
}