import React from "react";
import * as Ant from "antd";
import * as Components from "..";
import { Link } from "react-router-dom";

interface UserSettingProps {}

const UserSetting: React.FC<UserSettingProps> = (props) => {
  const items: Ant.MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: (
        <div className="border-b py-1">
          <p className="text-black text-lg mb-1 font-bold">
            Nhâm Bổn Tường
          </p>
          <p className="text-xs">Software Engineer</p>
        </div>
      ),
      children: [
        {
          key: "update",
          label: (
            <Link to="#" className="flex">
              <span className="mr-1 flex justify-center items-center">
                <Components.Icons.IconEdit className="text-blue-600" />
              </span>
              <span className="text-blue-600">Cập nhật tài khoản</span>
            </Link>
          ),
        },
        {
          key: "logout",
          label: (
            <Link to="#" className="flex">
              <span className="mr-1 flex justify-center items-center">
                <Components.Icons.IconLogout className="text-blue-600" />
              </span>
              <span className="text-blue-600">Thoát</span>
            </Link>
          ),
        },
      ],
    },
  ];

  return (
    <Ant.Dropdown
      overlayStyle={{ width: "240px" }}
      menu={{ items }}
      placement="bottomRight"
      trigger={["click"]}
      arrow
    >
      <Ant.Avatar className="cursor-pointer bg-red-700" size={32} icon={<div>T</div>} />
    </Ant.Dropdown>
  );
};

export default UserSetting;
