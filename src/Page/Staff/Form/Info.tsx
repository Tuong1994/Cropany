import React from "react";
import * as Ant from "antd";
import options from "../../../Options";

interface InfoProps {}

const Info: React.FC<InfoProps> = (props) => {
  return (
    <Ant.Row gutter={16} className="p-5">
      <Ant.Col span={8}>
        <Ant.Typography>
          <Ant.Typography.Title level={5}>
            Thông tin nhân viên
          </Ant.Typography.Title>
          <Ant.Typography.Paragraph>
            Các thông tin liên quan đến công việc
          </Ant.Typography.Paragraph>
        </Ant.Typography>
      </Ant.Col>

      <Ant.Col span={16}>
        <Ant.Row gutter={16}>
          <Ant.Col span={12}>
            <Ant.Form.Item name="office" label="Văn phòng làm việc" required>
              <Ant.Select
                showSearch
                placeholder="Chọn văn phòng làm việc"
                optionFilterProp="children"
                options={options.office}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>

            <Ant.Form.Item name="department" label="Phòng ban">
              <Ant.Select
                showSearch
                placeholder="Chọn phòng ban"
                optionFilterProp="children"
                options={options.department}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>

            <Ant.Form.Item name="position" label="Chức danh" required>
              <Ant.Input className="rounded" />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col span={8}>
            <Ant.Form.Item name="jobType" label="Loại hình công việc">
              <Ant.Select
                showSearch
                placeholder="Chọn loại hình công việc"
                optionFilterProp="children"
                options={options.jobType}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>

            <Ant.Form.Item name="positionType" label="Chức vụ/Cập bậc">
              <Ant.Select
                showSearch
                placeholder="Chọn chức vụ/cấp bậc"
                optionFilterProp="children"
                options={options.positionType}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>
          </Ant.Col>
        </Ant.Row>
      </Ant.Col>
    </Ant.Row>
  );
};

export default Info;
