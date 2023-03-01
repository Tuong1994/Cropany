import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import type { ColumnsType } from "antd/es/table";

interface ListProps {}

interface DataType {
  key: React.Key;
  avatar: string;
  name: string;
  firstName: string;
  lastName: string;
  position: string;
  office: string;
  department: string;
  staffId: string;
  jobType: string;
  status: string;
  bg: string;
}

const List: React.FC<ListProps> = (props) => {
  const selectDropdownStyle: React.CSSProperties = {
    minWidth: "100px",
  };

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

  const data: DataType[] = [
    {
      key: "1",
      avatar: "",
      name: "Nhâm Bổn Tường",
      firstName: "Tường",
      lastName: "Nhâm",
      position: "Software Engineer",
      office: "Văn phòng chính",
      department: "Software",
      staffId: "2007",
      jobType: "Nhân viên chính thức",
      status: "Có hiệu lực",
      bg: "rgb(191, 64, 64)",
    },
    {
      key: "2",
      avatar: "",
      name: "Nguyễn Hữu An",
      firstName: "An",
      lastName: "Nguyễn",
      position: "Software Engineer",
      office: "Văn phòng chính",
      department: "Software",
      staffId: "2006",
      jobType: "Nhân viên chính thức",
      status: "Có hiệu lực",
      bg: "rgb(45, 210, 210)",
    },
    {
      key: "3",
      avatar: "",
      name: "Nguyễn Tấn Đức",
      firstName: "Đức",
      lastName: "Nguyễn",
      position: "Software Engineer",
      office: "Văn phòng chính",
      department: "Software",
      staffId: "2005",
      jobType: "Nhân viên chính thức",
      status: "Có hiệu lực",
      bg: "rgb(58, 94, 120)",
    },
    {
      key: "4",
      avatar: "",
      name: "Nguyễn Kim Quy",
      firstName: "Quy",
      lastName: "Nguyễn",
      position: "Software Engineer",
      office: "Văn phòng chính",
      department: "Software",
      staffId: "2004",
      jobType: "Nhân viên chính thức",
      status: "Có hiệu lực",
      bg: "rgb(134, 113, 45)",
    },
    {
      key: "5",
      avatar: "",
      name: "Nguyễn Đức Thuận",
      firstName: "Thuận",
      lastName: "Nguyễn",
      position: "Software Engineer",
      office: "Văn phòng chính",
      department: "Software",
      staffId: "2002",
      jobType: "Nhân viên chính thức",
      status: "Có hiệu lực",
      bg: "rgb(191, 130, 64)",
    },
    {
      key: "6",
      avatar: "",
      name: "Huỳnh Sự",
      firstName: "Sự",
      lastName: "Huỳnh",
      position: "General Manager",
      office: "Văn phòng chính",
      department: "Software",
      staffId: "2001",
      jobType: "Nhân viên chính thức",
      status: "Có hiệu lực",
      bg: "rgb(58, 120, 64)",
    },
    {
      key: "7",
      avatar: "",
      name: "Võ Duy Tuấn",
      firstName: "Tuấn",
      lastName: "Võ",
      position: "CEO",
      office: "Văn phòng chính",
      department: "BOD",
      staffId: "2000",
      jobType: "Nhân viên chính thức",
      status: "Có hiệu lực",
      bg: "rgb(58, 120, 64)",
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      width: 55,
      align: "center",
      render: (_t, s) => (
        <Ant.Avatar style={{ background: s.bg }}>
          {s.firstName.charAt(0)}
        </Ant.Avatar>
      ),
    },
    {
      title: "HỌ VÀ TÊN",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "CHỨC DANH",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "VĂN PHÒNG",
      dataIndex: "office",
      key: "office",
      width: 150,
    },
    {
      title: "PHÒNG BAN",
      dataIndex: "department",
      key: "department",
      width: 120,
    },
    {
      title: "MÃ NHÂN VIÊN",
      dataIndex: "staffId",
      key: "staffId",
      width: 125,
      align: "center",
    },
    {
      title: "LOẠI HÌNH CÔNG VIỆC",
      dataIndex: "jobType",
      key: "jobType",
      width: 180,
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Ant.Tag color="green" className="border-0">
          {text}
        </Ant.Tag>
      ),
    },
    {
      title: (
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
      ),
      dataIndex: "",
      key: "action",
      width: 50,
    },
  ];

  return (
    <Ant.Layout className="staff">
      <Ant.Layout.Header
        style={{
          height: "auto",
          background: "transparent",
          padding: "15px 0 0 0",
        }}
      >
        <h3 className="mt-0 mb-3 text-2xl font-semibold px-5">Nhân viên</h3>
        <p className="m-0 mb-3 text-sm text-gray-400 px-5">Tất cả (7)</p>

        <Ant.Form className="bg-gray-200 py-3 px-5">
          <Ant.Row gutter={16} align="middle">
            <Ant.Col span={4}>
              <Ant.Form.Item className="m-0">
                <Ant.Input placeholder="Tên, chức vụ, điện thoại, email" />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={2}>
              <Ant.Form.Item className="m-0">
                <Ant.Select
                  placeholder="Văn phòng"
                  dropdownStyle={selectDropdownStyle}
                />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={2}>
              <Ant.Form.Item className="m-0">
                <Ant.Select
                  placeholder="Phòng ban"
                  dropdownStyle={selectDropdownStyle}
                />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={3}>
              <Ant.Form.Item className="m-0">
                <Ant.Select
                  placeholder="Loại hình công việc"
                  dropdownStyle={selectDropdownStyle}
                />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={2}>
              <Ant.Form.Item className="m-0">
                <Ant.Select
                  placeholder="Trạng thái"
                  dropdownStyle={selectDropdownStyle}
                />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col>
              <Ant.Form.Item className="m-0">
                <Ant.Button className="border-blue-400 text-blue-400">
                  Lọc
                </Ant.Button>
              </Ant.Form.Item>
            </Ant.Col>
          </Ant.Row>
        </Ant.Form>
      </Ant.Layout.Header>

      <Ant.Table
        className="staff__table"
        columns={columns}
        dataSource={data}
        sticky={{ offsetHeader: 65 }}
        pagination={{ position: ["bottomCenter"] }}
      />
    </Ant.Layout>
  );
};

export default List;
