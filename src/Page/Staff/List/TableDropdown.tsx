import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { IActiveCol } from ".";

interface TableDropdownProps {
  avatar: IActiveCol;
  name: IActiveCol;
  position: IActiveCol;
  office: IActiveCol;
  department: IActiveCol;
  staffId: IActiveCol;
  jobType: IActiveCol;
  status: IActiveCol;
  setAvatar: React.Dispatch<React.SetStateAction<IActiveCol>>;
  setName: React.Dispatch<React.SetStateAction<IActiveCol>>;
  setPosition: React.Dispatch<React.SetStateAction<IActiveCol>>;
  setOffice: React.Dispatch<React.SetStateAction<IActiveCol>>;
  setDepartment: React.Dispatch<React.SetStateAction<IActiveCol>>;
  setStaffId: React.Dispatch<React.SetStateAction<IActiveCol>>;
  setJobType: React.Dispatch<React.SetStateAction<IActiveCol>>;
  setStatus: React.Dispatch<React.SetStateAction<IActiveCol>>;
}

const TableDropdown: React.FC<TableDropdownProps> = (props) => {
  const {
    avatar,
    name,
    position,
    office,
    department,
    staffId,
    jobType,
    status,
    setAvatar,
    setName,
    setPosition,
    setOffice,
    setDepartment,
    setStaffId,
    setJobType,
    setStatus,
  } = props;

  return (
    <Ant.Layout.Content className="w-max flex flex-col items-start p-3 mr-7">
      <Ant.Typography.Text className="font-bold mb-2">
        Chọn cột muốn hiển thị
      </Ant.Typography.Text>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="avatar"
        className="my-1"
        checked={avatar.active}
        onChange={(e) => {
          if (avatar.active)
            setAvatar({
              ...avatar,
              key: "",
              active: false,
            });
          else
            setAvatar({
              ...avatar,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Avatar
      </Ant.Checkbox>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="name"
        className="my-1"
        checked={name.active}
        onChange={(e) => {
          if (name.active)
            setName({
              ...name,
              key: "",
              active: false,
            });
          else
            setName({
              ...name,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Họ Và Tên
      </Ant.Checkbox>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="position"
        className="my-1"
        checked={position.active}
        onChange={(e) => {
          if (position.active)
            setPosition({
              ...position,
              key: "",
              active: false,
            });
          else
            setPosition({
              ...position,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Chức danh
      </Ant.Checkbox>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="office"
        className="my-1"
        checked={office.active}
        onChange={(e) => {
          if (office.active)
            setOffice({
              ...office,
              key: "",
              active: false,
            });
          else
            setOffice({
              ...office,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Văn phòng
      </Ant.Checkbox>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="department"
        className="my-1"
        checked={department.active}
        onChange={(e) => {
          if (department.active)
            setDepartment({
              ...department,
              key: "",
              active: false,
            });
          else
            setDepartment({
              ...department,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Phòng Ban
      </Ant.Checkbox>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="staffId"
        className="my-1"
        checked={staffId.active}
        onChange={(e) => {
          if (staffId.active)
            setStaffId({
              ...staffId,
              key: "",
              active: false,
            });
          else
            setStaffId({
              ...staffId,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Mã Nhân Viên
      </Ant.Checkbox>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="jobType"
        className="my-1"
        checked={jobType.active}
        onChange={(e) => {
          if (jobType.active)
            setJobType({
              ...jobType,
              key: "",
              active: false,
            });
          else
            setJobType({
              ...jobType,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Loại Hình Công Việc
      </Ant.Checkbox>

      <Ant.Checkbox
        style={{ marginInlineStart: 0 }}
        value="status"
        className="my-1"
        checked={status.active}
        onChange={(e) => {
          if (status.active)
            setStatus({
              ...status,
              key: "",
              active: false,
            });
          else
            setStatus({
              ...status,
              key: e.target.value,
              active: true,
            });
        }}
      >
        Trạng Thái
      </Ant.Checkbox>
    </Ant.Layout.Content>
  );
};

export default TableDropdown;
