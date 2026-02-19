import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import "../styles/RotatingStack.css";

function RotatingStack() {
  return (
    <section className="stack-section">
      <h2 className="stack-title">MERN Stack</h2>

      <div className="orbit-container">
        <div className="orbit">
          <div className="logo logo1">
            <SiMongodb />
          </div>
          <div className="logo logo2">
            <SiExpress />
          </div>
          <div className="logo logo3">
            <SiReact />
          </div>
          <div className="logo logo4">
            <SiNodedotjs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RotatingStack;
