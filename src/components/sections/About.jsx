import { default as React, forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref} id="about">
      <h2>Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi fugit quo rerum nihil?
        Rerum molestiae pariatur sit exercitationem ab itaque, nostrum alias iste. Molestias veniam
        nemo repudiandae odit id.
      </p>
    </div>
  );
});

export default About;
