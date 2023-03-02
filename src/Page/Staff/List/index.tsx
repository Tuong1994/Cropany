import React from "react";
import * as Ant from "antd";
import type { ColumnsType } from "antd/es/table";
import { IStaff } from "../../../Models/Staff";
import useStaffStore from "../../../Store/Staff";
import ListHeader from "./ListHeader";
import TableDropdown from "./TableDropdown";

interface ListProps {}

const List: React.FC<ListProps> = (props) => {
  const staffs = useStaffStore((state) => state.staffs);

  const [columns, setColumns] = React.useState<ColumnsType<IStaff>>([
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
      title: <TableDropdown />,
      dataIndex: "",
      key: "action",
      width: 50,
    },
  ]);

  return (
    <Ant.Layout className="staff">
      <ListHeader />

      <Ant.Table
        className="staff__table"
        columns={columns}
        dataSource={staffs}
        sticky={{ offsetHeader: 65 }}
        pagination={{
          position: ["bottomCenter"],
          total: staffs.length,
          defaultCurrent: 1,
          defaultPageSize: 20,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `Kết quả từ ${range[0]} đến ${range[1]} trên tổng số ${total} dòng`,
        }}
      />
    </Ant.Layout>
  );
};

export default List;
