/* eslint-disable react/prop-types */
import "./CardSkills.css"
export default function CardSkills({ nom, image, ...props }) {
  return (
    <div className="card-skill" {...props}>
        <img src={image} alt={nom} />
        {/* <h3>{nom + " " + level + '%'}</h3> */}
    </div>
  )
}
