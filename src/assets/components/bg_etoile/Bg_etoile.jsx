import React, { useRef } from 'react'
import "./Bg_etoile.css"
import { useEffect } from 'react'
import Etoile from './Etoile'

export default function Bg_etoile() {
    const ref_bg = useRef(null)
    return (
        <div className="etoile-bg" ref={ref_bg}>
            {
                [...Array(200)].map( (index) => (
                    <Etoile key={index} />
                 ) )
            }
        </div>
    )
}

