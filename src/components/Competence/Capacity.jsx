/* eslint-disable react/prop-types */
import "./Capacity.css"

function Capacity({ skill }) {
  return (
    <div className="capacity">
        <div className="show-more">
            <p style={{}}>{skill.name ?? "" }</p>
        </div>

        <div style={{width: "100%", background: "#111727", boxShadow:"2px 0 10px rgba(0, 255, 255, 0.2)", borderRadius: "10px"}}>
            <div id="c" className="active" style={{background: skill.color ? skill.color : "", width: skill.level+"%", position:"relative"}}>
                <span>
                  <img src="/Animation_img/rocket.png" className="fusee-capacity" alt="Fusée qui décole et accélere" />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Capacity;






