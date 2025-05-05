import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);

    const toggleColor = () => {
        const colors = showPurple ? ["red", "green", "yellow", "purple"] : ["red", "green", "yellow"];
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    const addPurple = () => {
        setShowPurple(true);
    };

    const lightClass = (lightColor) => {
        return `light ${lightColor} ${color === lightColor ? "glow" : ""}`;
    };

	return (
		<div className="page-container">
			<div className="traffic-light-container">
				<div className={lightClass("red")} onClick={() => setColor("red")}></div>
				<div className={lightClass("yellow")} onClick={() => setColor("yellow")}></div>
				<div className={lightClass("green")} onClick={() => setColor("green")}></div>
				{showPurple && (
					<div className={lightClass("purple")} onClick={() => setColor("purple")}></div>
				)}
			</div>
			<div className="buttons">
				<button onClick={toggleColor}>Cambiar Color</button>
				<button onClick={addPurple}>Agregar Púrpura</button>
			</div>
		</div>
	);
	
};

export default TrafficLight;
