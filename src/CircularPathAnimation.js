import React, { useEffect, useState, useRef } from "react";
import { Spring } from "react-spring/renderprops";

const Animation = () => {
    const pathRef = useRef();
    const [offset, setOffset] = useState(null);

    useEffect(() => {
        setOffset(pathRef.current.getTotalLength());
    }, [offset]);

    return (
        <div
            style={{
                position: "absolute",
                top: "40%",
                left: "50%",
            }}
        >
            {offset ? (
                <Spring
                    from={{ x: offset }}
                    to={{ x: 10 }}
                    config={{ tension: 4, friction: 0.5, precision: 0.1 }}
                >
                    {(props) => (
                        <svg>
                            <circle
                                strokeDashoffset={props.x}
                                strokeDasharray={offset}
                                strokeWidth="20"
                                cx="120"
                                cy="80"
                                r="50"
                                stroke="black"
                                fill="none"
                                ref={pathRef}
                            />
                        </svg>
                    )}
                </Spring>
            ) : (
                <svg>
                    <circle
                        strokeWidth="10"
                        cx="200"
                        cy="50"
                        r="40"
                        fill="none"
                        ref={pathRef}
                    />
                </svg>
            )}
        </div>
    );
};

export default Animation;
