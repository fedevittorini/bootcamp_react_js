import { validateHeaderValue } from "http";
import { useState } from "react"


export default function Card(props) {
  const imagetSrc = props.img;
  const [cnt, setCnt] = useState(0);
  console.log(imagetSrc)
  const handleClick = () => {
    let c = cnt + 1
    setCnt(c)
  }

  return (
    <div>
      { imagetSrc !== null && imagetSrc !== undefined && imagetSrc !== "" &&
        (<><img src={props.img} alt="Imagen"/></>)
      }
      {imagetSrc === undefined &&
        <><p>Sin Imagen</p></>
      }

      <p>{props.img}</p>
      <h3>{props.title}</h3>
      <div><p>{props.name}</p></div>
      <h6>{cnt}</h6>
      <button name="increment" onClick={handleClick}>+</button>
    </div>
  )
}
