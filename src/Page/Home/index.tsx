import React from "react";
import * as Ant from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Ant.Layout className="home">
      <Header />

      <Ant.Layout>
        <SideNav />
        <Ant.Layout.Content style={{ marginLeft: "76px"}}>
          <Outlet />
        </Ant.Layout.Content>
      </Ant.Layout>
    </Ant.Layout>
  );
};

export default Home;
