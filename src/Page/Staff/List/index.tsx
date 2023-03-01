import React from "react";
import * as Ant from "antd";
import type { ColumnsType } from "antd/es/table";

interface ListProps {}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const List: React.FC<ListProps> = (props) => {
  const selectDropdownStyle: React.CSSProperties = {
    minWidth: "100px",
  };

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
    },
    { title: "Column 8", dataIndex: "address", key: "8" },
  ];

  return (
    <Ant.Layout>
      <Ant.Layout.Header
        style={{ height: "auto", background: "transparent", padding: "15px 0 0 0" }}
      >
        <h3 className="mt-0 mb-3 text-2xl font-semibold px-5">Nhân viên</h3>
        <p className="m-0 mb-3 text-sm text-gray-400 px-5">Tất cả (7)</p>

        <Ant.Form className="bg-gray-200 py-3 px-5">
          <Ant.Row gutter={16} align="middle">
            <Ant.Col span={4}>
              <Ant.Form.Item className="m-0">
                <Ant.Input />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={2}>
              <Ant.Form.Item className="m-0">
                <Ant.Select dropdownStyle={selectDropdownStyle} />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={2}>
              <Ant.Form.Item className="m-0">
                <Ant.Select dropdownStyle={selectDropdownStyle} />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={3}>
              <Ant.Form.Item className="m-0">
                <Ant.Select dropdownStyle={selectDropdownStyle} />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col span={2}>
              <Ant.Form.Item className="m-0">
                <Ant.Select dropdownStyle={selectDropdownStyle} />
              </Ant.Form.Item>
            </Ant.Col>

            <Ant.Col>
              <Ant.Form.Item className="m-0">
                <Ant.Button>Lọc</Ant.Button>
              </Ant.Form.Item>
            </Ant.Col>
          </Ant.Row>
        </Ant.Form>
      </Ant.Layout.Header>

      <Ant.Table columns={columns} dataSource={data} sticky />
    </Ant.Layout>
  );
};

export default List;
