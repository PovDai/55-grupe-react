import { MyForm } from "../components/mytodo/Myform";
import { MyList } from "../components/mytodo/MyList";
import { MyStats } from "../components/mytodo/MyStats";
import '../components/form/myform.css'
import { useState } from "react";

export function MyToDo() {
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);

    function pridek(text) {
        setList(currentList =>
            [...currentList, {
                id: id, text: text, isCompleted: false, 
                
            },])
        
        setId(id=>id+1)
    }

      function modifyTask(taskId) {
        setList(currectList => currectList.map(
            task => task.id === taskId ? {
                ...task,
                isCompleted: true,
            } : task));
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                                    <div className="" >
                                    <MyForm pridekTaska={pridek} />
                                    <MyList modifyTaskFunc={modifyTask} list={list.filter(item => !item.isCompleted)} />
                                    </div>
                        <MyStats
                            esami={list.filter(item=>!item.isCompleted).length} 
                            atlikta={list.filter(item=>item.isCompleted).length}/>
                    </div>
                </div>
            </div>
        
        </>
    )
}