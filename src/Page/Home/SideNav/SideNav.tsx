import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { Link } from "react-router-dom";
import Item from "./Item";
import SubItem from "./SubItem";

interface SideNavProps {}

export interface IChildList {
  id: string;
  icon: React.ReactNode;
  title: string;
  link: string;
}

export type MenuItem = Required<Ant.MenuProps>["items"][number];

const SideNav: React.FC<SideNavProps> = (props) => {
  const staffList: MenuItem[] = [
    {
      key: "c1",
      label: (
        <SubItem
          title="Chấm công"
          link="/staff"
          icon={<Components.Icons.IconClock className="mr-1" />}
        />
      ),
    },
    {
      key: "c2",
      label: (
        <SubItem
          title="Quản lý dự án"
          link="/staff"
          icon={<Components.Icons.IconProject className="mr-1" />}
        />
      ),
    },
    {
      key: "c3",
      label: (
        <SubItem
          title="Thư viện tài liệu"
          link="/staff"
          icon={<Components.Icons.IconDocument className="mr-1" />}
        />
      ),
    },
    {
      key: "c4",
      label: (
        <SubItem
          title="Nhân viên"
          link="/staff"
          icon={<Components.Icons.IconStaff className="mr-1" />}
        />
      ),
    },
  ];

  const items: MenuItem[] = [
    {
      key: "1",
      label: (
        <Item
          title="BÁN HÀNG"
          link="/"
          icon={<Components.Icons.IconCart />}
          list={[]}
        />
      ),
    },
    {
      key: "2",
      label: (
        <Item
          title="TỒN KHO"
          link="/"
          icon={<Components.Icons.IconBox />}
          list={[]}
        />
      ),
    },
    {
      key: "3",
      label: (
        <Item
          title="NHÂN VIÊN"
          link="/"
          icon={<Components.Icons.IconUser />}
          list={staffList}
        />
      ),
    },
    {
      key: "4",
      label: (
        <Item
          title="GIAO HÀNG"
          link="/"
          icon={<Components.Icons.IconTruck />}
          list={[]}
        />
      ),
    },
  ];

  const onClick: Ant.MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  return (
    <Ant.Layout.Sider
      className="home__sidenav"
      width="auto"
      style={{
        position: "fixed",
        top: 64,
        zIndex: 1,
      }}
    >
      <Ant.Menu
        style={{
          background: "rgb(1, 104, 250)",
          color: "#fff",
          height: "100vh",
        }}
        className="sidenav__menu"
        mode="vertical"
        items={items}
      />
    </Ant.Layout.Sider>
  );
};

export default SideNav;
