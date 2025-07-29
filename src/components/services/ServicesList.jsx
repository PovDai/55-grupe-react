export function ServicesList({title, services, onDelete, onEdit }) {
    if (services.length === 0) {
        return (
            <div>
                <h1>{title}</h1>   
            <h5>Empty list </h5>
            </div>
        )
    }
    return (
        <ul className="list-group">
            {services.map(service => (
                <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {service.id} {service.value}
                    <div>
                        <button 
                            onClick={() => onEdit(service)}
                            className="btn btn-warning btn-sm me-2"
                        >
                            Redaguoti
                        </button>
                        <button 
                            onClick={() => onDelete(service.id)}
                            className="btn btn-danger btn-sm"
                        >
                            Ištrinti
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}