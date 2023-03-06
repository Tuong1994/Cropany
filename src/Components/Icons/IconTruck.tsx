import React from "react";

interface IconTruckProps {
  className?: string;
  onClick?(): void;
}

const IconTruck: React.FC<IconTruckProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="7" cy="17" r="2"></circle>
        <circle cx="17" cy="17" r="2"></circle>
        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
        <line x1="3" y1="9" x2="7" y2="9"></line>
      </svg>
    </div>
  );
};

export default IconTruck;
