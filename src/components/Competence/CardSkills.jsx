/* eslint-disable react/prop-types */
import "./CardSkills.css"
export default function CardSkills({ nom, image, level }) {
  return (
    <div className="card-skills">
        <img src={image} alt={nom} />
        <h3>{nom + " " + level + '%'}</h3>
    </div>
  )
}
