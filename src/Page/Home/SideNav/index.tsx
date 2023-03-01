import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { Link } from "react-router-dom";

interface SideNavProps {}

const SideNav: React.FC<SideNavProps> = (props) => {
  const menuItemStyle: React.CSSProperties = {
    overflow: "unset",
    height: "auto",
    paddingInline: "5px",
    borderRadius: "4px",
  };

  const items = [
    {
      id: "1",
      title: "BÁN HÀNG",
      icon: <Components.Icons.IconCart className="mb-1" />,
      link: "/staff",
      children: [],
    },
    {
      id: "2",
      title: "TỒN KHO",
      icon: <Components.Icons.IconBox className="mb-1" />,
      link: "/staff",
      children: [],
    },
    {
      id: "3",
      title: "NHÂN SỰ",
      icon: <Components.Icons.IconUser className="mb-1" />,
      link: "/staff",
      children: [
        {
          id: "c1",
          icon: <Components.Icons.IconClock className="mr-1" />,
          title: "Chấm công",
          link: "/staff",
        },
        {
          id: "c2",
          icon: <Components.Icons.IconProject className="mr-1" />,
          title: "Quản lý dự án",
          link: "/staff",
        },
        {
          id: "c3",
          icon: <Components.Icons.IconDocument className="mr-1" />,
          title: "Thư viện tài liệu",
          link: "/staff",
        },
        {
          id: "c4",
          icon: <Components.Icons.IconStaff className="mr-1" />,
          title: "Nhân viên",
          link: "/staff",
        },
      ],
    },
    {
      id: "4",
      title: "GIAO HÀNG",
      icon: <Components.Icons.IconTruck className="mb-1" />,
      link: "/staff",
      children: [],
    },
  ];

  return (
    <Ant.Layout.Sider
      width="auto"
      style={{
        position: "fixed",
        top: 64,
        zIndex: 1,
        background: "#3ba0e9",
        height: "100vh",
      }}
    >
      <Ant.Menu style={{ background: "#3ba0e9", color: "#fff" }}>
        {items.map((m) => (
          <Ant.Tooltip
            overlayStyle={{
              width: "240px",
            }}
            placement="right"
            title={
              <Ant.Menu style={{ background: "transparent" }}>
                {m.children.map((c) => (
                  <Ant.Menu.Item
                    key={c.id}
                    className="py-2 my-1 rounded text-gray-400 hover:text-white"
                  >
                    <Link to={c.link} className="flex items-center px-2 hover:text-white">
                      {c.icon}
                      <span>{c.title}</span>
                    </Link>
                  </Ant.Menu.Item>
                ))}
              </Ant.Menu>
            }
            key={m.id}
          >
            <Ant.Menu.Item
              className="py-2 border border-transparent hover:bg-blue-700 hover:border-white"
              style={menuItemStyle}
            >
              <Link to={m.link} className="flex flex-col items-center">
                {m.icon}
                <small
                  className="text-white text-xs font-semibold"
                  style={{ fontSize: "10px" }}
                >
                  {m.title}
                </small>
              </Link>
            </Ant.Menu.Item>
          </Ant.Tooltip>
        ))}
      </Ant.Menu>
    </Ant.Layout.Sider>
  );
};

export default SideNav;
