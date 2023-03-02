import React from "react";
import * as Ant from "antd";
import options from "../../../Options";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <Ant.Row gutter={16} className="p-5">
      <Ant.Col span={8}>
        <Ant.Typography>
          <Ant.Typography.Title level={5}>
            Thông tin liên hệ
          </Ant.Typography.Title>
          <Ant.Typography.Paragraph>
            Các thông tin cá nhân
          </Ant.Typography.Paragraph>
        </Ant.Typography>
      </Ant.Col>

      <Ant.Col span={16}>
        <Ant.Row gutter={16}>
          <Ant.Col span={12}>
            <Ant.Form.Item
              name="name"
              label="Họ và tên"
              required
              rules={[{ required: true, message: "Không được để trống" }]}
            >
              <Ant.Input placeholder="Nhập họ tên" className="rounded" />
            </Ant.Form.Item>

            <Ant.Form.Item
              name="phone"
              label="Điện thoại"
              required
              rules={[{ required: true, message: "Không được để trống" }]}
            >
              <Ant.Input placeholder="Nhập số điện" className="rounded" />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col span={8}>
            <Ant.Form.Item
              name="gender"
              label="Giới tính"
              required
              rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
            >
              <Ant.Select
                showSearch
                placeholder="Chọn giới tính"
                optionFilterProp="children"
                options={options.gender}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Ant.Form.Item>
            
            <Ant.Form.Item
              name="staffId"
              label="Mã nhân viên"
              tooltip={{
                title:
                  "(Không bắt buộc) Mã số của nhân viên này ở công ty bạn ngoài thực tế. Chỉ cho phép chữ cái hoặc số",
                icon: <QuestionCircleOutlined />,
              }}
            >
              <Ant.Input placeholder="Nhập mã nhân viên" className="rounded" />
            </Ant.Form.Item>
          </Ant.Col>
        </Ant.Row>
      </Ant.Col>
    </Ant.Row>
  );
};

export default Contact;
