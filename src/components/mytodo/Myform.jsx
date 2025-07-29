import {useState} from "react"
export function MyForm({pridekTaska}) {

    const [text, setText] = useState('');    

    function tekstoKeitimui(e) {
        setText(e.target.value)
        
    }
    function formaiPaleisti(e) {
        e.preventDefault();
        pridekTaska(text)
        setText('')
        
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={formaiPaleisti} >
                        <label className="d-flex" htmlFor="text">Fill the form</label>
                        <input onChange={tekstoKeitimui} type="text" id="text" value={text} />
                        <button className="btn btn-danger mb-1">Add</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}