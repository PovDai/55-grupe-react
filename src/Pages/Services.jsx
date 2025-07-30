// React bibliotekos importai
import { useEffect, useState } from "react";
// Vaikinių komponentų importai
import { TodoForm } from "../components/todo/TodoForm";
import { TodoList } from "../components/todo/TodoList";
import { TodoStats } from "../components/todo/TodoStats";

// Pagrindinis Services komponentas
export function Services() {
    // localStorage raktas duomenims saugoti
    const dataKey = '55gr-todo';
    
    // State kintamieji:
    const [tabIndex, setTabIndex] = useState(0); // Aktyvus tab'as (0-all, 1-active, 2-completed)
    const [id, setId] = useState(1);             // Unikalus ID naujiems užduočiams
    const [list, setList] = useState([]);        // Užduočių sąrašas

    // Efektas užkrovus komponentą - užkrauname išsaugotus duomenis
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(dataKey));
        console.log(data); // Konsolėje patikriname gautus duomenis

        if (data) {
            setList(data); // Jei yra išsaugoti duomenys, atnaujiname state
        } else {
            // Jei nėra, inicijuojame tuščią masyvą localStorage
            localStorage.setItem(dataKey, JSON.stringify(list));
        }
    }, []); // Tuščias dependency masyvas - vykdomas tik vieną kartą

    // Efektas, vykdomas kiekvieną kartą pasikeitus sąrašui
    useEffect(() => {
        localStorage.setItem(dataKey, JSON.stringify(list)); // Išsaugome sąrašą
    }, [list]); // Priklauso nuo list state

    // Filtruojame sąrašą pagal aktyvų tab'ą
    let filteredList = list; // Standartinis - visos užduotys
    if (tabIndex === 1) {
        filteredList = list.filter(item => !item.isCompleted); // Tik nebaigtos
    }
    if (tabIndex === 2) {
        filteredList = list.filter(item => item.isCompleted); // Tik baigtos
    }

    // Funkcija naujai užduočiai pridėti
    function addTask(text) {
        setList(currentList => [
            ...currentList, // Esamos užduotys
            {             // Nauja užduotis
                id: id,    // Unikalus ID
                text: text, // Užduoties tekstas
                isCompleted: false, // Ar užbaigta (standartiškai - ne)
            },
        ]);
        setId(id => id + 1); // Padidiname ID sekantiems įrašams
    }

    // Funkcija užduoties statusui pakeisti (į užbaigtą)
    function modifyTaskCompletion(taskId) {
        setList(currectList => currectList.map(
            task => task.id === taskId ? {
                ...task,                   // Visi esami task duomenys
                isCompleted: true,         // Atnaujiname tik statusą
            } : task
        ));
    }

    // Funkcija užduoties tekstui atnaujinti
    function modifyTaskText(taskId, newText) {
        setList(currectList => currectList.map(
            task => task.id === taskId ? {
                ...task,                   // Visi esami task duomenys
                text: newText,            // Atnaujiname tik tekstą
            } : task
        ));
    }

    // Komponento grąžinamas JSX
    return (
        <main>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-8">
                        {/* Todo forma su perduodama addTask funkcija */}
                        <TodoForm addTaskFunc={addTask} />
                        
                        {/* Tab'ų navigacija */}
                        <nav>
                            <div className="nav nav-tabs mb-3" role="tablist">
                                {/* Visos užduotys tab'as */}
                                <button className={'nav-link' + (tabIndex === 0 ? ' active' : '')}
                                    onClick={() => setTabIndex(() => 0)} type="button">
                                    All tasks
                                </button>
                                
                                {/* Aktyvios užduotys tab'as */}
                                <button className={'nav-link' + (tabIndex === 1 ? ' active' : '')}
                                    onClick={() => setTabIndex(() => 1)} type="button">
                                    Active tasks
                                </button>
                                
                                {/* Užbaigtos užduotys tab'as */}
                                <button className={'nav-link' + (tabIndex === 2 ? ' active' : '')}
                                    onClick={() => setTabIndex(() => 2)} type="button">
                                    Completed tasks
                                </button>
                            </div>
                        </nav>
                        
                        {/* Todo sąrašas su perduodamais duomenimis ir funkcijomis */}
                        <TodoList 
                            list={filteredList}
                            modifyTaskTextFunc={modifyTaskText}
                            modifyTaskCompletionFunc={modifyTaskCompletion} 
                        />
                    </div>
                    
                    {/* Dešinėje pusėje - statistika */}
                    <div className="col-12 col-md-4 mb-5">
                        <TodoStats
                            activeCount={list.filter(item => !item.isCompleted).length}
                            completedCount={list.filter(item => item.isCompleted).length} 
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}