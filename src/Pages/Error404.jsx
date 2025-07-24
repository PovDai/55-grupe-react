import { useParams } from "react-router"

export function Error404() {
    let { '*':splat } = useParams();
    

    
    return (
        <>
        <Header/>
        <div>Error 404 TOKS PUSLAPIS NEEGZISTUOJA -{splat}
        
        </div>
        </>
    )
}