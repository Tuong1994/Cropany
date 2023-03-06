import React from "react";
import * as Ant from "antd";
import { IStaff } from "../../../Models/Staff";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddHeader from "./FormHeader";
import Account from "./Account";
import Contact from "./Contact";
import Info from "./Info";
import Status from "./Status";
import useStaffStore from "../../../Store/Staff";
import ModalPassword from "./ModalPassword";
import utils from "../../../Utils";

interface StaffFormProps {}

const StaffForm: React.FC<StaffFormProps> = (props) => {
  const { state, pathname } = useLocation();

  const [form] = Ant.Form.useForm();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const staff = useStaffStore((state) => state.staff);

  const getDetail = useStaffStore((state) => state.getDetail);

  const addStaff = useStaffStore((state) => state.addStaff);

  const updateStaff = useStaffStore((state) => state.updateStaff);

  React.useEffect(() => {
    if (pathname === "/staff/edit") {
      getDetail(state?.id);
    }
  }, [state, pathname]);

  React.useEffect(() => {
    if (pathname === "/staff/edit")
      form.setFieldsValue({
        email: staff?.email ?? "",
        name: staff?.name ?? "",
        phone: staff?.phone ?? "",
        position: staff?.position ?? "",
        staffId: staff?.staffId ?? "",
        gender: staff?.gender ?? null,
        positionType: staff?.positionType ?? null,
        office: staff?.office ?? null,
        department: staff?.department ?? null,
        jobType: staff?.jobType ?? null,
        timeKeeping: staff?.timeKeeping ?? null,
        status: staff?.status ?? null,
      });
  }, [state, pathname, staff]);

  const initialValues: IStaff = {
    email: "",
    password: "",
    name: "",
    phone: "",
    position: "",
    staffId: "",
    gender: null,
    positionType: null,
    office: null,
    department: null,
    jobType: null,
    timeKeeping: null,
    status: null,
  };

  const onSubmit = (staff: IStaff) => {
    setIsSubmitting(true);
    if (pathname === "/staff/edit") {
      updateStaff(state?.id, staff);
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Cập nhật thành công");
        navigate("/staff");
      }, 500);
    } else {
      const newId = utils.uuid();
      const newStaff: IStaff = {
        ...staff,
        id: newId,
        key: newId,
      };
      addStaff(newStaff);
      setTimeout(() => {
        form.resetFields();
        toast.success("Thêm mới thành công");
        setIsSubmitting(false);
        navigate("/staff/edit", { state: { id: newId } });
      }, 500);
    }
  };

  return (
    <React.Fragment>
      <Ant.Layout>
        <AddHeader pathname={pathname} />

        <Ant.Form
          layout="vertical"
          form={form}
          initialValues={initialValues}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Ant.Row>
            <Ant.Col span={18}>
              <Ant.Layout.Content className="bg-white px-2">
                <Account pathname={pathname} setIsOpen={setIsOpen} />
                <Contact />

                <Ant.Divider />

                <Info />
              </Ant.Layout.Content>
            </Ant.Col>

            <Ant.Col span={6}>
              <Ant.Layout.Content className="h-full bg-gray-200 p-5">
                <Status isSubmitting={isSubmitting} />
              </Ant.Layout.Content>
            </Ant.Col>
          </Ant.Row>
        </Ant.Form>
      </Ant.Layout>

      <ModalPassword
        id={state?.id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        getDetail={getDetail}
      />
    </React.Fragment>
  );
};

export default StaffForm;
