import { useEffect, useState } from "react";
import "./Bg_etoile.css"
import Etoile from './Etoile'

export default function Bg_etoile() {

    const [ nbrEtoile, setNbrEtoile ] = useState(180);
    const [ ecran, setEcran ] = useState(window.innerWidth)

    const handleEcran = ()=> {
        setEcran(window.innerWidth)
    }
    useEffect(()=>{

        window.addEventListener('resize', handleEcran)
        handleEcran()
        if( ecran <= 778 ) {
            setNbrEtoile(120);
        } else {
            setNbrEtoile(180);
        }
        console.log(ecran)

        return () => {
            window.removeEventListener('resize', handleEcran)
        }
    }, [ecran]);
    const etoiles = Array.from({ length: nbrEtoile });
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

