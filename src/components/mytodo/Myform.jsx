import {useState} from "react"
export function MyForm({pridekTaska}) {

    const [text, setText] = useState('');    
    const [ color, setColor ] = useState('');

    function tekstoKeitimui(e) {
        setText(e.target.value)
        
    }
    function formaiPaleisti(e) {
        e.preventDefault();
        pridekTaska(text,color)
        setText('')
        setColor('')
    }
    function spalvosKeitimui(e) {
        setColor(e.target.value)
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={formaiPaleisti} >
                        <label className="d-flex" htmlFor="text">Fill the form</label>
                        <input onChange={tekstoKeitimui} type="text" id="text" value={text} />

                        <label className="d-flex" htmlFor="color"> Fill the color</label>
                        <input onChange={spalvosKeitimui} type="text" id="color" value={color}/>
                        


                        <button className="btn btn-danger mb-1">Add</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}