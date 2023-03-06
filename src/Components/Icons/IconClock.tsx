import React from "react";

interface IconClockProps {
  className?: string;
  onClick?(): void;
}

const IconClock: React.FC<IconClockProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
     <svg xmlns="http://www.w3.org/2000/svg" className="ant-menu-item-icon" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M12 12h-3.5"></path><path d="M12 7v5"></path></svg>
    </div>
  );
};

export default IconClock;
