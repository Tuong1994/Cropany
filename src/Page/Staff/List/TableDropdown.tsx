import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";

interface TableDropdownProps {
    
}

const TableDropdown: React.FC<TableDropdownProps> = (props) => {
  const items: Ant.MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: (
        <div className="text-black font-semibold">Chọn cột muốn hiển thị</div>
      ),
      children: [
        {
          key: "avatar",
          label: <Ant.Checkbox>Avatar</Ant.Checkbox>,
        },
        {
          key: "name",
          label: <Ant.Checkbox>Họ Và Tên</Ant.Checkbox>,
        },
        {
          key: "position",
          label: <Ant.Checkbox>Chức năng</Ant.Checkbox>,
        },
        {
          key: "office",
          label: <Ant.Checkbox>Văn phòng</Ant.Checkbox>,
        },
        {
          key: "department",
          label: <Ant.Checkbox>Phòng Ban</Ant.Checkbox>,
        },
        {
          key: "staffId",
          label: <Ant.Checkbox>Mã Nhân Viên</Ant.Checkbox>,
        },
        {
          key: "jobType",
          label: <Ant.Checkbox>Loại Hình Công Việc</Ant.Checkbox>,
        },
        {
          key: "status",
          label: <Ant.Checkbox>Trạng Thái</Ant.Checkbox>,
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
      <div title="Ẩn/Hiển thị cột dữ liệu" className="cursor-pointer">
        <Components.Icons.IconColumns />
      </div>
    </Ant.Dropdown>
  );
};

export default TableDropdown;
