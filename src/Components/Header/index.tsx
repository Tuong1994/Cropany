import React from "react";
import * as Ant from "antd";
import * as Components from "..";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Translate from "./Translate";
import UserSetting from "./UserSetting";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Ant.Layout.Header
      className="border-b px-5 bg-white header"
      style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
    >
      <Ant.Row justify="space-between" align="middle">
        <Ant.Col>
          <Ant.Row gutter={16} align="middle">
            <Ant.Col>
              {(() => {
                if (pathname === "/staff/add" || pathname === "/staff/edit") {
                  return (
                    <Ant.Tooltip title="Quay lại">
                      <Components.Icons.IconArrowLeft
                        className="header__icon"
                        onClick={() => navigate("/staff")}
                      />
                    </Ant.Tooltip>
                  );
                } else {
                  return !isOpen ? (
                    <Components.Icons.IconBar
                      className="header__icon"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  ) : (
                    <Components.Icons.IconBarClose
                      className="header__icon"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  );
                }
              })()}
            </Ant.Col>
            <Ant.Col>
              <Link className="header__logo" to="/staff">
                <span>Crop</span>
                <span>any</span>
              </Link>
            </Ant.Col>
            <Ant.Col>
              <Ant.Input
                className="header__search"
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
