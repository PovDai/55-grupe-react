export function ColorBlock({colorData}) {

  

    return (

                    <li >
            <div>{colorData.index}</div>
            <div>{colorData.name}</div>
            <div style={{backgroundColor:colorData.color}}>Spalva</div>
                    </li>
    )
}