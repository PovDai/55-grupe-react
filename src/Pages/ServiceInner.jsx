
import { useParams } from "react-router";
export function ServiceInner() {
    let { service} = useParams();
    return (
        <>
   
      <div className="container">
                <div className="row">
                    <h1>ServiceInner Page {service}</h1></div>
            
            </div>
        
        </>
    )
}