/* eslint-disable react/prop-types */
import "./Capacity.css"

function Capacity({ skill }) {
  return (
    <div className="capacity">
        <div className="show-more">
            <p>{skill.name ?? "" }</p>
        </div>

        <div style={{width: "100%", background: "rgba(48, 48, 48, 0.34)", borderRadius: "10px"}}>
            <div id="c" className="active" style={{background: skill.color ? skill.color : "", width: skill.level+"%"}}>
                <span>C</span>
            </div>
        </div>
    </div>
  )
}

export default Capacity;






