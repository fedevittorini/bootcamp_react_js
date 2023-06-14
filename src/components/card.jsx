import { validateHeaderValue } from "http";
import { useState } from "react"


export default function Card(props) {
  let imageTarget = <p>Sin Imagen</p>;
  
  if (props.img !== null && props.img !== undefined && props.img !== "") {
    imageTarget = <img src={props.img} alt="Imagen" className="card-img-top img-card" data-bs-toggle="modal" data-bs-target="#cardModal" data-bs-ref-id="card-7" data-bs-title="Tarjeta 7"/>
  }

  const [cnt, setCnt] = useState(0);
  const handleClick = () => {
    let c = cnt + 1
    setCnt(c)
  }

  return (
    <div className="card m-1 c-size shadow-lg" id="card-7">
      <div className="card-header text-center h-100">
        {imageTarget} 
        { cnt > 0 ?
          (<h6>cnt: {cnt}</h6>) :
          (<p>Hace click!!!</p>)
        }
        
        <button name="increment" onClick={handleClick}>Contar</button>
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}
