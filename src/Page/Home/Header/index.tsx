import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import Translate from "./Translate";
import UserSetting from "./UserSetting";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Ant.Layout.Header
      className="border-b px-3 bg-white"
      style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
    >
      <Ant.Row justify="space-between" align="middle">
        <Ant.Col>
          <Ant.Row gutter={16} align="middle">
            <Ant.Col>
              <Components.Icons.IconBar className="home__icon" />
            </Ant.Col>
            <Ant.Col>
              <a className="home__logo" href="#">
                <span>Crop</span>
                <span>any</span>
              </a>
            </Ant.Col>
            <Ant.Col>
              <Ant.Input
                className="home__search"
                suffix={<Components.Icons.IconSearch />}
              />
            </Ant.Col>
          </Ant.Row>
        </Ant.Col>

        <Ant.Col>
          <Ant.Row gutter={16} align="middle">
            <Ant.Col>
              <Translate />
            </Ant.Col>

            <Ant.Col>
              <UserSetting />
            </Ant.Col>
          </Ant.Row>
        </Ant.Col>
      </Ant.Row>
    </Ant.Layout.Header>
  );
};

export default Header;
