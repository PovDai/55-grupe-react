import './TextList.css';
import { ColorBlock } from './ColorBlock';
export function TextList() {

    const data = [
        {
            index: 1,
            name: 'Geltona',
            color:'#FDB913',
        },
          {
            index: 2,
            name: 'Zalia',
            color:'#006A44',
        },
            {
            index: 3,
            name: 'Raudona',
            color:'#C1272D',
        },
    ]

    
    return (

        <div className="text-list">
            <p>Spalvos:</p>
            <ul>
                {data.map((item) => <ColorBlock key={item.index } colorData={item}   />)}
                
                
                {data.map((item,index) => (
                    <li key={index}>
                        <div>{index+1}</div>
                        <div>{item.name}</div>
                        <div className='color' style={{backgroundColor:item.color}}></div>
                    </li>))}
                </ul>


        Text List
        </div>
    )
}