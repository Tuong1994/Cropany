import React from "react";
import * as Ant from "antd";
import { MenuItem } from ".";

interface ItemProps {
  title: string;
  icon: React.ReactNode;
  list: MenuItem[];
  isOpen: boolean;
}

const Item: React.FC<ItemProps> = (props) => {
  const { title, icon, list, isOpen } = props;

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
      placement="rightTop"
      overlayClassName={isOpen ? "hidden" : ""}
      title={<Ant.Menu style={{ background: "transparent" }} items={list} />}
    >
      <div style={menuItemStyle}>
        <div className="flex flex-col items-center">
          <span className="mb-1">{icon}</span>
          <small
            className="text-white text-xs text-gray-100 font-semibold"
            style={{ fontSize: "10px" }}
          >
            {title}
          </small>
        </div>
      </div>
    </Ant.Tooltip>
  );
};

export default Item;
