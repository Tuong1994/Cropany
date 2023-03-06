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

  return (
    <Ant.Layout className="home">
      <SideNav isOpen={isOpen} />

      <Ant.Layout.Content style={{ marginLeft: isOpen ? "309px" : "82px" }}>
        <Outlet />
      </Ant.Layout.Content>
    </Ant.Layout>
  );
};

export default Home;
