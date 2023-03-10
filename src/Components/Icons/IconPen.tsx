import React from "react";

interface IconPenProps {
  className?: string;
  onClick?(): void;
}

const IconPen: React.FC<IconPenProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path><line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line></svg>
    </div>
  );
};

export default IconPen;
