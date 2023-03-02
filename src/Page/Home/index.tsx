import React from "react";
import * as Ant from "antd";
import * as Components from "../../Components";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import SubItem from "./SubItem";

interface HomeProps {
  isOpen: boolean;
}

const Home: React.FC<HomeProps> = (props) => {
  const { isOpen } = props;

  const childList = [
    {
      id: "c1",
      icon: <Components.Icons.IconClock className="mr-2" />,
      title: "Chấm công",
      link: "/staff",
    },
    {
      id: "c2",
      icon: <Components.Icons.IconProject className="mr-2" />,
      title: "Quản lý dự án",
      link: "/staff",
    },
    {
      id: "c3",
      icon: <Components.Icons.IconDocument className="mr-2" />,
      title: "Thư viện tài liệu",
      link: "/staff",
    },
    {
      id: "c4",
      icon: <Components.Icons.IconStaff className="mr-2" />,
      title: "Nhân viên",
      link: "/staff",
    },
  ];

  return (
    <Ant.Layout className="home">
      <SideNav isOpen={isOpen} />

      <Ant.Row>
        {isOpen && (
          <Ant.Col span={4}>
            <Ant.Menu
              className="bg-gray-600 px-1"
              style={{
                maxWidth: "100%",
                width: "225px",
                height: "100vh",
                marginLeft: "76px",
                position: "fixed",
                top: 64,
                zIndex: 1,
              }}
            >
              {childList.map((c) => {
                if (c.id === "c3") {
                  return (
                    <React.Fragment key={c.id}>
                      <Ant.Menu.Item>
                        <SubItem title={c.title} link={c.link} icon={c.icon} />
                      </Ant.Menu.Item>
                      <Ant.Divider className="bg-gray-800, my-3" />
                    </React.Fragment>
                  );
                }
                return (
                  <Ant.Menu.Item>
                    <SubItem
                      key={c.id}
                      title={c.title}
                      link={c.link}
                      icon={c.icon}
                    />
                  </Ant.Menu.Item>
                );
              })}
            </Ant.Menu>
          </Ant.Col>
        )}
        <Ant.Col span={isOpen ? 20 : 24}>
          <Ant.Layout.Content style={{ marginLeft: "76px" }}>
            <Outlet />
          </Ant.Layout.Content>
        </Ant.Col>
      </Ant.Row>
    </Ant.Layout>
  );
};

export default Home;
