/* eslint-disable react/prop-types */
import "./Bar.css"

export default function Bar({ color, level}) {
  return (
    <div style={{height: `${level}%`}}>
        <div style={{background: color, height: "100%", width: "44px", borderRadius: "25px", margin : "auto"}}></div>
    </div>
  )
}
