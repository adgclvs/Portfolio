import React, { useEffect, useState } from "react";

const Circles = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateCircles = () => {
      const newCircles = [];
      for (let i = 0; i < 6; i++) {
        const size = Math.floor(Math.random() * 500);
        const top = Math.floor(Math.random() * (window.innerHeight - size));
        const left = Math.floor(Math.random() * (window.innerWidth - size));

        newCircles.push({
          size,
          top,
          left,
        });
      }
      setCircles(newCircles);
    };

    generateCircles();
  }, []);

  return (
    <div>
      {circles.map((circle, index) => {
        const color = `rgb(${index * 50}, ${index * 50}, ${index * 50})`;

        return (
          <div
            key={index}
            className="circle"
            style={{
              position: "absolute",
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              top: `${circle.top}px`,
              left: `${circle.left}px`,
              borderRadius: "50%",
              backgroundColor: `rgba(128, 128, 128, 0.1)`,
              zIndex: index + 1,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Circles;
