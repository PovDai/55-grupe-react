import { useParams } from "react-router"

export function Error404() {
    let { '*':splat } = useParams();
    

    
    return (
        <>
        
         <div className="container">
                <div className="row">
                    <h1>TOKS PUSLAPIS NEEGZISTUOJS {splat}</h1></div>
        </div>
        </>
    )
}