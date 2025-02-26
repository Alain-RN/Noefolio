/* eslint-disable react/prop-types */
import "./Bar.css";

export default function Bar({ color, level, name }) {

  return (
    <div style={{ height: `${level}%` }}>
      <div
        style={{
          background: color,
          height: "100%",
          width: "44px",
          borderRadius: "24px",
          margin: "auto",
        }}
        className="bar"

      >
        <h2
          className="tool-name"
        >
          {name}
        </h2>
      </div>
    </div>
  );
}
