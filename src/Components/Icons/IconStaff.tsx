import React from "react";

interface IconStaffProps {
  className?: string;
  onClick?(): void;
}

const IconStaff: React.FC<IconStaffProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ant-menu-item-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="3" y="4" width="18" height="16" rx="3"></rect>
        <circle cx="9" cy="10" r="2"></circle>
        <line x1="15" y1="8" x2="17" y2="8"></line>
        <line x1="15" y1="12" x2="17" y2="12"></line>
        <line x1="7" y1="16" x2="17" y2="16"></line>
      </svg>
    </div>
  );
};

export default IconStaff;
