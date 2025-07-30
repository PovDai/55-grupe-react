export function MyList({list,modifyTaskFunc}) {
    
    return (
        <div className="container">
            <div className="row">
                <ul className="col-12">
                    {list.map(item => (<li style={{backgroundColor:item.color}} className="d-flex my-3 p-2" key={item.id}>{item.text}
                        <button onClick={()=>modifyTaskFunc(item.id)}>Complete task</button>
                    </li>))}
                </ul>
            </div>
        </div>
        
    )
}


