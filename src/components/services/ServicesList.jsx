export function ServicesList({services}) {
    



    return (
        
        <div>
            <h1>My Services</h1>
        
            {services.map(service => <li key={service.id} className="fs-4">{service.id} {service.value}</li>)}
            
        
        </div>
    )
}