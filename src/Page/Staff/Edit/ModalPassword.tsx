import React from "react";
import * as Ant from "antd";

interface ModalPasswordProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalPassword: React.FC<ModalPasswordProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Ant.Modal
      open={isOpen}
      title="Thay đổi mật khẩu nhân viên"
      wrapClassName="rounded"
      bodyStyle={{ padding: 0 }}
      footer={null}
      closable={false}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
    >
      <Ant.Form layout="vertical">
        <Ant.Form.Item label="Mật khẩu đăng nhập" required>
          <Ant.Input.Password className="rounded" />
        </Ant.Form.Item>
        <Ant.Form.Item>
          <Ant.Row justify="end">
            <Ant.Col>
              <Ant.Button className="mr-3" onClick={() => setIsOpen(false)}>
                Đóng
              </Ant.Button>
              <Ant.Button
                type="primary"
                className="bg-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Lưu thông tin
              </Ant.Button>
            </Ant.Col>
          </Ant.Row>
        </Ant.Form.Item>
      </Ant.Form>
    </Ant.Modal>
  );
};

export default ModalPassword;
