// Importuojame useState hook'ą iš React – leidžia komponentui saugoti ir keisti vidinę būseną
import { useState } from "react";

// Importuojame vaikų komponentą, kuris atvaizduos paslaugų sąrašą
import { ServicesList } from "../components/services/ServicesList";

// Eksportuojame Services komponentą
export function Services() {
    // nextId – skaitiklis, skirtas generuoti unikalius ID naujoms paslaugoms
    const [nextId, setNextId] = useState(5);

    // list – tai masyvas, kuriame saugomos paslaugos (kiekviena turi id ir value)
    const [list, setList] = useState([
        { id: 1, value: 'design' },
        { id: 2, value: 'development' },
        { id: 3, value: 'management' },
        { id: 4, value: 'ux' }
    ]);

    // editingId – saugo, kuri paslauga šiuo metu redaguojama (pagal ID)
    const [editingId, setEditingId] = useState(null);

    // editValue – saugo laikinas redaguojamos paslaugos tekstas
    const [editValue, setEditValue] = useState('');

    // Funkcija, kuri prideda naują paslaugą su 'new item' tekstu
    function handleAdd() {
        setList(currentList => [
            ...currentList, // paliekame visas senas paslaugas
            { id: nextId, value: 'new item' } // pridedame naują su unikaliu ID
        ]);
        setNextId(n => n + 1); // padidiname ID skaitiklį
    }

    // Funkcija, kuri pašalina paslaugą pagal jos ID
    function handleDelete(idToDelete) {
        // Filtruojame sąrašą – paliekame tik tas paslaugas, kurių ID nesutampa su nurodytu
        setList(currentList => currentList.filter(item => item.id !== idToDelete));
    }

    // Funkcija, kuri inicijuoja paslaugos redagavimą
    function startEditing(item) {
        setEditingId(item.id);      // nustatome, kuri paslauga redaguojama
        setEditValue(item.value);   // į input'ą įkeliame esamą reikšmę
    }

    // Funkcija, kuri išsaugo redaguotą paslaugą
    function handleUpdate() {
        // Atkuriame sąrašą – pakeičiame tik redaguojamą elementą
        setList(currentList =>
            currentList.map(item =>
                item.id === editingId
                    ? { ...item, value: editValue } // jei ID sutampa – atnaujiname
                    : item // kiti lieka nepakitę
            )
        );
        cancelEditing(); // išvalome redagavimo režimą
    }

    // Funkcija, kuri atšaukia redagavimą
    function cancelEditing() {
        setEditingId(null);  // atšaukiame pasirinkimą
        setEditValue('');    // išvalome tekstą
    }

    // JSX grąžinamas turinys (HTML struktūra)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* Mygtukas naujai paslaugai pridėti */}
                    <button onClick={handleAdd} className="btn btn-primary mb-3">
                        Pridėti naują paslaugą
                    </button>

                    {/* Jei kažkas redaguojama – rodomas redagavimo langas */}
                    {editingId !== null && (
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5>Redaguoti įrašą</h5>
                                
                                {/* Teksto laukas redaguojamai reikšmei įvesti */}
                                <input
                                    type="text"
                                    value={editValue} // rodomas dabartinis redaguojamas tekstas
                                    onChange={(e) => setEditValue(e.target.value)} // keičiam redaguojamą tekstą
                                    className="form-control mb-2"
                                />

                                {/* Mygtukas išsaugoti pakeitimus */}
                                <button onClick={handleUpdate} className="btn btn-success me-2">
                                    Išsaugoti
                                </button>

                                {/* Mygtukas atšaukti redagavimą */}
                                <button onClick={cancelEditing} className="btn btn-secondary">
                                    Atšaukti
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Komponentas, kuris atvaizduoja visas paslaugas */}
                    <ServicesList 
                        services={list}           // perduodame paslaugų sąrašą
                        onDelete={handleDelete}   // perduodame trynimo funkciją
                        onEdit={startEditing}     // perduodame redagavimo paleidimo funkciją
                    />
                </div>
            </div>
        </div>
    );
}