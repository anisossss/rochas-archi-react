import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Donut from "./Donut";

const AnimatedDonut = animated(Donut);

export default function App() {
  const [toggle, setToggle] = useState(false);
  const props = useSpring({
    value: toggle ? 300 : 0,
    from: { value: toggle ? 0 : 300 },
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: ".wrapper",
        start: "top 13%",
        end: "12% top",
        toggleActions: "play none none none",
        onEnter: () => {
          setToggle(!toggle);
        },
        // markers: true
      },
    });
    timeline.to(props, {
      value:300,
      duration: 1, 
    });

    return () => {
      timeline.kill();
    };
  }, [toggle, props]);

  return (
    <div className="wrapper">
      <AnimatedDonut percent={props.value} />
    
    </div>
  );
}
