import React from "react";

interface IconBarCloseProps {
  className?: string;
  onClick?(): void;
}

const IconBarClose: React.FC<IconBarCloseProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-indent-decrease" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="20" y1="6" x2="13" y2="6"></line><line x1="20" y1="12" x2="11" y2="12"></line><line x1="20" y1="18" x2="13" y2="18"></line><path d="M8 8l-4 4l4 4"></path></svg>
    </div>
  );
};

export default IconBarClose;
