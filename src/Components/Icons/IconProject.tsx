import React from "react";

interface IconProjectProps {
  className?: string;
  onClick?(): void;
}

const IconProject: React.FC<IconProjectProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
     <svg xmlns="http://www.w3.org/2000/svg" className="ant-menu-item-icon" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="6" y1="9" x2="12" y2="9"></line><line x1="4" y1="5" x2="8" y2="5"></line><path d="M6 5v11a1 1 0 0 0 1 1h5"></path><rect x="12" y="7" width="8" height="4" rx="1"></rect><rect x="12" y="15" width="8" height="4" rx="1"></rect></svg>
    </div>
  );
};

export default IconProject;
