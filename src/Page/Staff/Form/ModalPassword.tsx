import React from "react";
import * as Ant from "antd";
import useStaffStore from "../../../Store/Staff";
import { toast } from "react-toastify";

interface ModalPasswordProps {
  id: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getDetail(id: string): void;
}

const ModalPassword: React.FC<ModalPasswordProps> = (props) => {
  const { id, isOpen, setIsOpen, getDetail } = props;

  const changePassword = useStaffStore((state) => state.changePassword);

  const [newPass, setNewPass] = React.useState<string>("");
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleOk = () => {
    setIsSubmitting(true);
    changePassword(id, newPass);
    setTimeout(() => {
      toast.success("Đổi mật khẩu thành công");
      getDetail(id);
      setNewPass("");
      setIsOpen(false);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Ant.Modal
      open={isOpen}
      title="Thay đổi mật khẩu nhân viên"
      className="modal-password"
      okButtonProps={{ className: "bg-blue-500" }}
      cancelText="Đóng"
      okText="Lưu thông tin"
      closable={false}
      confirmLoading={isSubmitting}
      onOk={handleOk}
      onCancel={() => setIsOpen(false)}
    >
      <Ant.Form layout="vertical">
        <Ant.Form.Item label="Mật khẩu đăng nhập" name="password" required>
          <Ant.Input.Password
            className="rounded"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </Ant.Form.Item>
      </Ant.Form>
    </Ant.Modal>
  );
};

export default ModalPassword;
