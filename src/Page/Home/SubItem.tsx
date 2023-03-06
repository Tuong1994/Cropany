import React from "react";
import * as Ant from "antd";
import { Link } from "react-router-dom";

interface SubItemProps {
  link: string;
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const SubItem: React.FC<SubItemProps> = (props) => {
  const { link, title, icon, className = "" } = props;

  return (
    <Link
      to={link}
      className={`rounded text-gray-200 hover:text-white flex items-center px-2 hover:text-white ${className}`}
    >
      <span className="text-gray-200">{icon}</span>
      <span className="text-gray-200">{title}</span>
    </Link>
  );
};

export default SubItem;
