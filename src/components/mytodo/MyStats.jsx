export function MyStats({ esami, atlikta, list,modifyTaskFunc }) {
  const data = list.filter(item => item.color === 'red'||item.color==="green")  // Filtruojame raudonus elementus
  console.log(data)  // Patikriname, kas filtruojama

  if (data.length > 0) {  // Jei radome raudonų elementų
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>MyStats</h1>
            <p>{data[0].color} elementų: {data.length}</p>
            <p style={{backgroundColor:data[0].color}}>{list.id} elemento spalva: {data[0].color}</p>
          </div>
        </div>
      </div>
    )
  }

  // Jei neradome raudonų:
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>MyStats</h1>
          <p>Rodomi: {esami}</p>
          <p>Atlikta tasku: {atlikta}</p>
          <p>Viso tasku: {esami + atlikta}</p>
          <p>Raudonų elementų nerasta.</p>  
        </div>
      </div>
    </div>
  )
}