import React from "react";
import "./AnimatedStaff.module.scss";

export default function AnimatedStaff() {
  return (
    <div className="staff-container">
      <svg viewBox="0 0 600 100" className="staff">
        {/* Pięciolinia */}
        {[10, 20, 30, 40, 50].map((y) => (
          <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="black" strokeWidth="1" />
        ))}

        {/* Nutki jako koła – możesz zamienić na SVG path lub komponent */}
        {[15, 25, 35, 20, 30].map((y, i) => (
          <circle
            key={i}
            className={`note note-${i}`}
            cx="0"
            cy={y}
            r="5"
            fill="black"
          />
        ))}
      </svg>
    </div>
  );
}
