import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { Link } from "react-router-dom";

interface UserSettingProps {}

const UserSetting: React.FC<UserSettingProps> = (props) => {
  const items: Ant.MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: (
        <div className="border-b py-1">
          <p className="text-black text-lg mb-1 font-semibold">
            Nhâm Bổn Tường
          </p>
          <p className="text-xs">Software Engineer</p>
        </div>
      ),
      children: [
        {
          key: "update",
          label: (
            <a href="#" className="flex hover:text-blue-400">
              <Components.Icons.IconEdit className="mr-1 flex justify-center align-center" />
              <span>Cập nhật tài khoản</span>
            </a>
          ),
        },
        {
          key: "logout",
          label: (
            <a href="#" className="flex hover:text-blue-400">
              <Components.Icons.IconLogout className="mr-1 flex justify-center align-center" />
              <span>Thoát</span>
            </a>
          ),
        },
      ],
    },
  ];

  return (
    <Ant.Dropdown
      menu={{ items }}
      placement="bottomRight"
      trigger={["click"]}
      arrow
    >
      <Ant.Avatar size={32} icon={<div>T</div>} />
    </Ant.Dropdown>
  );
};

export default UserSetting;
