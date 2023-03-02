import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
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

export interface IActiveCol {
  key: string;
  active: boolean;
}

const List: React.FC<ListProps> = (props) => {
  const staffs = useStaffStore((state) => state.staffs);

  const [avatar, setAvatar] = React.useState<IActiveCol>({
    key: "avatar",
    active: true,
  });
  const [name, setName] = React.useState<IActiveCol>({
    key: "name",
    active: true,
  });
  const [position, setPosition] = React.useState<IActiveCol>({
    key: "position",
    active: true,
  });
  const [office, setOffice] = React.useState<IActiveCol>({
    key: "office",
    active: true,
  });
  const [department, setDepartment] = React.useState<IActiveCol>({
    key: "department",
    active: true,
  });
  const [staffId, setStaffId] = React.useState<IActiveCol>({
    key: "",
    active: false,
  });
  const [jobType, setJobType] = React.useState<IActiveCol>({
    key: "jobType",
    active: true,
  });
  const [status, setStatus] = React.useState<IActiveCol>({
    key: "status",
    active: true,
  });

  const columns: ColumnsType<IStaff> = [
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
      title: "",
      dataIndex: "",
      key: "action",
      filterDropdown: () => {
        return (
          <TableDropdown
            avatar={avatar}
            name={name}
            position={position}
            office={office}
            department={department}
            staffId={staffId}
            jobType={jobType}
            status={status}
            setAvatar={setAvatar}
            setName={setName}
            setPosition={setPosition}
            setOffice={setOffice}
            setDepartment={setDepartment}
            setStaffId={setStaffId}
            setJobType={setJobType}
            setStatus={setStatus}
          />
        );
      },
      filterIcon: () => {
        return (
          <div title="Ẩn/Hiển thị cột dữ liệu" className="cursor-pointer mr-5">
            <Components.Icons.IconColumns className="text-black" />
          </div>
        );
      },
    },
  ];

  const filterCols = columns.filter(
    (c) =>
      c.key === avatar.key ||
      c.key === name.key ||
      c.key === position.key ||
      c.key === office.key ||
      c.key === department.key ||
      c.key === staffId.key ||
      c.key === jobType.key ||
      c.key === status.key ||
      c.key === "action"
  );

  return (
    <Ant.Layout className="staff__list">
      <ListHeader />

      <Ant.Table
        className="list__table"
        columns={filterCols}
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
