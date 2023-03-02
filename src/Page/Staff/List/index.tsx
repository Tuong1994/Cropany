import React from "react";
import * as Ant from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  EDepartment,
  EJobType,
  EOffice,
  EStaffStatus,
  IStaff,
} from "../../../Models/Staff";
import { Link } from "react-router-dom";
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
          {s.firstName?.charAt(0)}
        </Ant.Avatar>
      ),
    },
    {
      title: "HỌ VÀ TÊN",
      dataIndex: "name",
      key: "name",
      render: (text, staff) => (
        <Link
          className="text-blue-700"
          to="/staff/edit"
          state={{ id: staff.id }}
        >
          {text}
        </Link>
      ),
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
      render: (text) => (
        <div>
          {(() => {
            if (text === EOffice.main) {
              return "Văn phòng chính";
            }
          })()}
        </div>
      ),
    },
    {
      title: "PHÒNG BAN",
      dataIndex: "department",
      key: "department",
      width: 120,
      render: (text) => (
        <div>
          {(() => {
            const departments: any = {
              [EDepartment.bod]: "BOD",
              [EDepartment.software]: "Software",
              [EDepartment.cs]: "Customer Service",
              [EDepartment.sale]: "Sale",
            };
            return departments[text];
          })()}
        </div>
      ),
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
      render: (text) => (
        <div>
          {(() => {
            const jobType: any = {
              [EJobType.offical]: "Nhân viên chính thức",
              [EJobType.parttime]: "Bán thời gian",
              [EJobType.probation]: "Thử việc",
              [EJobType.outime]: "Làm thêm ngoài giờ",
              [EJobType.intern]: "Nhân viên thời vụ",
              [EJobType.outsource]: "Làm dự án",
            };
            return jobType[text];
          })()}
        </div>
      ),
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Ant.Tag
          color={text === EStaffStatus.active ? "green" : "red"}
          className="border-0"
        >
          {text === EStaffStatus.active ? "Có hiệu lực" : "Vô hiệu lực"}
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
    <Ant.Layout className="staff__list">
      <ListHeader />

      <Ant.Table
        className="list__table"
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
