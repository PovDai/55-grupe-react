export function MyStats({esami,atlikta}) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h1>MyStats</h1>
                    <p>Rodomi: {esami}</p>
                    <p>Atlikta tasku: {atlikta}</p>
                    <p>Viso tasku: {esami + atlikta}</p>
                </div>
            </div>
        </div>
    )
}