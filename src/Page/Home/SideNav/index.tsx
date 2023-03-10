import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import Item from "./Item";
import SubItem from "../SubItem";

interface SideNavProps {
  isOpen: boolean;
}

export interface IChildList {
  id: string;
  icon: React.ReactNode;
  title: string;
  link: string;
}

export type MenuItem = Required<Ant.MenuProps>["items"][number];

const SideNav: React.FC<SideNavProps> = (props) => {
  const { isOpen } = props;

  const staffList: MenuItem[] = [
    {
      key: "c1",
      label: (
        <SubItem
          title="Chấm công"
          link="/staff"
          icon={<Components.Icons.IconClock className="mr-2" />}
        />
      ),
    },
    {
      key: "c2",
      label: (
        <SubItem
          title="Quản lý dự án"
          link="/staff"
          icon={<Components.Icons.IconProject className="mr-2" />}
        />
      ),
    },
    {
      key: "c3",
      label: (
        <SubItem
          title="Thư viện tài liệu"
          link="/staff"
          icon={<Components.Icons.IconDocument className="mr-2" />}
        />
      ),
    },
    { type: "divider" },
    {
      key: "c4",
      label: (
        <SubItem
          title="Nhân viên"
          link="/staff"
          icon={<Components.Icons.IconStaff className="mr-2" />}
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
          icon={<Components.Icons.IconCart />}
          list={[]}
          isOpen={isOpen}
        />
      ),
    },
    {
      key: "2",
      label: (
        <Item
          title="TỒN KHO"
          icon={<Components.Icons.IconBox />}
          list={[]}
          isOpen={isOpen}
        />
      ),
    },
    {
      key: "3",
      label: (
        <Item
          title="NHÂN SỰ"
          icon={<Components.Icons.IconUser />}
          list={staffList}
          isOpen={isOpen}
        />
      ),
    },
    {
      key: "4",
      label: (
        <Item
          title="GIAO HÀNG"
          icon={<Components.Icons.IconTruck />}
          list={[]}
          isOpen={isOpen}
        />
      ),
    },
  ];

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
      <Ant.Row>
        <Ant.Col>
          <Ant.Menu
            items={items}
            className="sidenav__menu"
            mode="vertical"
            style={{
              background: "rgb(1, 104, 250)",
              color: "#fff",
              height: "100vh",
            }}
          />
        </Ant.Col>

        {isOpen && (
          <Ant.Col>
            <Ant.Menu
              items={staffList}
              className="bg-gray-600 px-1"
              mode="vertical"
              style={{
                maxWidth: "100%",
                width: "225px",
                height: "100vh",
              }}
            />
          </Ant.Col>
        )}
      </Ant.Row>
    </Ant.Layout.Sider>
  );
};

export default SideNav;
