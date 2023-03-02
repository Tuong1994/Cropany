import React from "react";
import * as Ant from "antd";
import { Link } from "react-router-dom";

interface EditHeaderProps {}

const EditHeader: React.FC<EditHeaderProps> = (props) => {
  return (
    <Ant.Layout.Header className="bg-transparent px-5 py-3 h-auto">
      <Ant.Breadcrumb className="mb-2">
        <Ant.Breadcrumb.Item>
          <Link to="/staff">Nhân viên</Link>
        </Ant.Breadcrumb.Item>
      </Ant.Breadcrumb>
      <Ant.Typography.Title level={3}>Cập nhật thông tin nhân viên</Ant.Typography.Title>
    </Ant.Layout.Header>
  );
};

export default EditHeader;
