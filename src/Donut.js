import React from "react";

export default function Donut({ percent }) {
  return (
    <svg
      viewBox="0 0 51 51"
      strokeWidth="2"
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="100"
      strokeDashoffset={percent}
      class="donut"
    >
      <circle
        transform="translate(25.500000, 25.500000) rotate(-270.000000) translate(-25.500000, -25.500000)"
        cx="25.5"
        cy="25.5"
        r="24.5"
      ></circle>
    </svg>
  );
}
