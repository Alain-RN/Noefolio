import "./Etoile.css"
import { FaStar } from "react-icons/fa";

export default function Etoile() {

    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)
    const random_size = Math.floor(Math.random()* 5 + 1)

    return (
        <div><FaStar className="etoile" size={ random_size } color='white' style={{position: "absolute", top: y+"px" , left: x+"px"}}></FaStar>
    </div>)
}
