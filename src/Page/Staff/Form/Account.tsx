import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface AccountProps {
  pathname: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Account: React.FC<AccountProps> = (props) => {
  const { pathname, setIsOpen } = props;

  return (
    <Ant.Row gutter={16} className="bg-green-50 p-5">
      <Ant.Col span={8}>
        <Ant.Typography>
          <Ant.Typography.Title level={5}>
            Thông tin đăng nhập
          </Ant.Typography.Title>
          <Ant.Typography.Paragraph>
            Tài khoản để nhân viên đăng nhập
          </Ant.Typography.Paragraph>
        </Ant.Typography>
      </Ant.Col>

      <Ant.Col span={16}>
        <Ant.Row gutter={16}>
          <Ant.Col span={12}>
            <Ant.Form.Item
              label="Email"
              name="email"
              required={true}
              tooltip={{
                title:
                  "Mật khẩu của tài khoản mới sẽ được gửi vào địa chỉ email này.",
                icon: <QuestionCircleOutlined />,
              }}
              rules={[{ required: true, message: "Không được bỏ trống" }]}
            >
              <Ant.Input size="large" className="rounded" />
            </Ant.Form.Item>
          </Ant.Col>

          <Ant.Col span={8}>
            {pathname === "/staff/edit" ? (
              <Ant.Form.Item label="Mật khẩu cài đặt">
                <Ant.Button
                  danger
                  size="large"
                  style={{ borderRadius: "4px" }}
                  onClick={() => setIsOpen(true)}
                >
                  <span>
                    <Components.Icons.IconPen />
                  </span>
                  <span>Cài đặt lại mật khẩu</span>
                </Ant.Button>
              </Ant.Form.Item>
            ) : (
              <Ant.Form.Item
                label="Mật khẩu cài đặt"
                name="password"
                required={true}
                rules={[{ required: true, message: "Không được bỏ trống" }]}
              >
                <Ant.Input.Password size="large" className="rounded" />
              </Ant.Form.Item>
            )}
          </Ant.Col>
        </Ant.Row>
      </Ant.Col>
    </Ant.Row>
  );
};

export default Account;
