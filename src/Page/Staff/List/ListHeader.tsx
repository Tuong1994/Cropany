import React from "react";
import * as Ant from "antd";
import { useNavigate } from "react-router-dom";
import { IListQuery } from "../../../Models/Base";
import options from "../../../Options";

interface ListHeaderProps {
  query: IListQuery;
  handleFilter(query: IListQuery): void;
}

const ListHeader: React.FC<ListHeaderProps> = (props) => {
  const { query, handleFilter } = props;

  const navigate = useNavigate();

  const selectDropdownStyle: React.CSSProperties = {
    minWidth: "max-content",
  };

  return (
    <Ant.Layout.Header
      style={{
        height: "auto",
        background: "transparent",
        padding: "15px 0 0 0",
      }}
    >
      <Ant.Row justify="space-between">
        <Ant.Col>
          <Ant.Typography.Title className="px-5" level={3}>
            Nhân viên
          </Ant.Typography.Title>
          <p className="m-0 mb-3 text-sm text-gray-500 px-5">Tất cả (7)</p>
        </Ant.Col>
        <Ant.Col>
          <Ant.Button
            type="primary"
            className="mr-5 bg-blue-400 font-semibold"
            onClick={() => navigate("/staff/add")}
          >
            Thêm mới nhân viên
          </Ant.Button>
        </Ant.Col>
      </Ant.Row>

      <Ant.Form
        initialValues={query}
        autoComplete="off"
        className="bg-gray-200 py-3 px-5"
        onFinish={handleFilter}
      >
        <Ant.Row gutter={16} align="middle">
          <Ant.Col span={4}>
            <Ant.Form.Item className="m-0" name="searchText">
              <Ant.Input placeholder="Tên, chức vụ, điện thoại, email" />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col>
            <Ant.Form.Item className="m-0" name="office">
              <Ant.Select
                showSearch
                placeholder="Văn phòng"
                optionFilterProp="children"
                dropdownStyle={selectDropdownStyle}
                dropdownMatchSelectWidth
                options={options.office}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col>
            <Ant.Form.Item className="m-0" name="department">
              <Ant.Select
                showSearch
                placeholder="Phòng ban"
                optionFilterProp="children"
                dropdownStyle={selectDropdownStyle}
                dropdownMatchSelectWidth
                options={options.department}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col>
            <Ant.Form.Item className="m-0" name="jobType">
              <Ant.Select
                placeholder="Loại hình công việc"
                optionFilterProp="children"
                dropdownStyle={selectDropdownStyle}
                dropdownMatchSelectWidth
                options={options.jobType}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col>
            <Ant.Form.Item className="m-0" name="status">
              <Ant.Select
                placeholder="Trạng thái"
                optionFilterProp="children"
                dropdownStyle={selectDropdownStyle}
                dropdownMatchSelectWidth
                options={options.staffStatus}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col>
            <Ant.Form.Item className="m-0">
              <Ant.Button className="border-blue-400 text-blue-400" htmlType="submit">
                Lọc
              </Ant.Button>
            </Ant.Form.Item>
          </Ant.Col>
        </Ant.Row>
      </Ant.Form>
    </Ant.Layout.Header>
  );
};

export default ListHeader;
