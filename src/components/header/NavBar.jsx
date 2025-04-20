import "./NavBar.css"
import { Capitaine } from "../presentation/Presentation_data"
import { useState } from "react"

export default function NavBar() {
  const [ showDropDown, setShowDropdown ] = useState(false);

  const handleShowDropDown = () => {
    setShowDropdown( e => !e);
  }

  return (
    <div className="e nav-container">
        <div className='navbar'>
          <div className="logo">
            <img src="logo.png" alt="Logo-noefolio" />
            <span style={{"color":" #00ffffee"}}>NOEFOLIO</span>
          </div>
          <div className="profil" onClick={handleShowDropDown}>
            <img src="/astro-profile.png" alt="" />
            {/* <a href="https://www.freepik.com/free-vector/cute-astronaut-flying-cartoon-vector-icon-illustration-science-technology-icon-isolated-flat-vector_233066663.htm#fromView=keyword&page=34&position=0&uuid=d7d9f169-3b77-4509-8e42-b66c5d3cfe24&query=Astronaut+Line+Art">Image by catalyststuff on Freepik</a> */}
          </div>
          <div className="me" style={{height:showDropDown  ? "210px": "0"}}>
            <h2>{Capitaine.nom}</h2>
            <h2>{Capitaine.prenom}</h2>
            <p>{Capitaine.specialite}</p>
          </div>
        </div>
    </div>

  )
}
