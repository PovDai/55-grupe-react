export function ServicesList({ services, onDelete, onEdit }) {
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