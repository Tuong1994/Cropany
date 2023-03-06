import React from "react";

interface IconColumnsProps {
  className?: string;
  onClick?(): void;
}

const IconColumns: React.FC<IconColumnsProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-columns"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="4" y1="6" x2="9.5" y2="6"></line>
        <line x1="4" y1="10" x2="9.5" y2="10"></line>
        <line x1="4" y1="14" x2="9.5" y2="14"></line>
        <line x1="4" y1="18" x2="9.5" y2="18"></line>
        <line x1="14.5" y1="6" x2="20" y2="6"></line>
        <line x1="14.5" y1="10" x2="20" y2="10"></line>
        <line x1="14.5" y1="14" x2="20" y2="14"></line>
        <line x1="14.5" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  );
};

export default IconColumns;
