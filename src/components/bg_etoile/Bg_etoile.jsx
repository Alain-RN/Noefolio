import "./Bg_etoile.css"
import Etoile from './Etoile'

export default function Bg_etoile() {
    const etoiles = Array.from({ length: 180 });
    return (
        <div className="etoile-bg">
            {
                etoiles.map( ( _, index) =>
                    <Etoile key={index} />
                )
            }
        </div>
    )
}

