import React from "react";
import * as Components from "../../../Components";
import * as Ant from "antd";
import { Link } from "react-router-dom";
import { IChildList, MenuItem } from "./SideNav";

interface ItemProps {
  title: string;
  link: string;
  icon: React.ReactNode;
  list: MenuItem[];
}

const Item: React.FC<ItemProps> = (props) => {
  const { title, icon, link, list } = props;

  const menuItemStyle: React.CSSProperties = {
    overflow: "unset",
    height: "auto",
    paddingInline: "5px",
    borderRadius: "4px",
  };

  return (
    <Ant.Tooltip
      overlayStyle={{
        width: "240px",
      }}
      placement="right"
      title={<Ant.Menu style={{ background: "transparent" }} items={list} />}
    >
      <div
        // className="py-2 border border-transparent hover:bg-blue-700 hover:border-white"
        style={menuItemStyle}
      >
        <Link to={link} className="flex flex-col items-center">
          <span className="mb-1">{icon}</span>
          <small
            className="text-white text-xs font-semibold"
            style={{ fontSize: "10px" }}
          >
            {title}
          </small>
        </Link>
      </div>
    </Ant.Tooltip>
  );
};

export default Item;
