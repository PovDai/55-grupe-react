import { Header } from '../components/Header';
import { useParams } from "react-router";
export function ServiceInner() {
    let { service} = useParams();
    return (
        <>
            <Header/>
        <div>ServiceInner zodis po service/ {service}</div>
        </>
    )
}