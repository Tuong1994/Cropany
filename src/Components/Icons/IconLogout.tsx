import React from "react";

interface IconLogoutProps {
  className?: string;
  onClick?(): void;
}

const IconLogout: React.FC<IconLogoutProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-0.5"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
        <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
      </svg>
    </div>
  );
};

export default IconLogout;
