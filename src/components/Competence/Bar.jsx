/* eslint-disable react/prop-types */
import "./Bar.css";

export default function Bar({ color, level, name }) {

  return (
    <div style={{ height: `${level}%` }} >
      <div
        className="bar"
        style={{
          background: color,
          height: "100%",
          borderRadius: "24px",
          marginInline: "auto",

        }}
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
