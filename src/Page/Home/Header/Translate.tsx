import React from "react";
import * as Ant from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

interface TranslateProps {}

const Translate: React.FC<TranslateProps> = (props) => {
  const items: Ant.MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: (
        <div className="border-b text-black">Chọn ngôn ngữ của phẩn mềm</div>
      ),
      children: [
        {
          key: "VN",
          label: (
            <div className="flex justify-between hover:text-blue-400">
              <div className="text-xs">
                <span className="mr-2">VN</span>
                <span>Tiếng Việt</span>
              </div>

              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div>
          ),
        },
        {
          key: "ENG",
          disabled: true,
          label: (
            <div className="text-xs">
              <span className="mr-2">GB</span>
              <span>English (Comming soon)</span>
            </div>
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
      <a
        href="#"
        className="cursor-pointer font-semibold text-xs text-gray-400"
      >
        VN
      </a>
    </Ant.Dropdown>
  );
};

export default Translate;
