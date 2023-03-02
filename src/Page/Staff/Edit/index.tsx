import React from "react";
import * as Ant from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { IStaff } from "../../../Models/Staff";
import { toast } from "react-toastify";
import EditHeader from "./EditHeader";
import Account from "./Account";
import ModalPassword from "./ModalPassword";
import Contact from "./Contact";
import Info from "./Info";
import Status from "./Status";
import useStaffStore from "../../../Store/Staff";

interface EditProps {}

const Edit: React.FC<EditProps> = (props) => {
  const { state } = useLocation();

  const [form] = Ant.Form.useForm();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const staff = useStaffStore((state) => state.staff);

  const getDetail = useStaffStore((state) => state.getDetail);

  const updateStaff = useStaffStore((state) => state.updateStaff);

  React.useEffect(() => {
    getDetail(state.id);
  });

  console.log(staff);

  React.useEffect(() => {
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
  }, [staff]);

  const initialValues: IStaff = {
    email: "",
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
    updateStaff(state.id, staff);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Cập nhật thành công");
      navigate("/staff");
    }, 500);
  };

  return (
    <React.Fragment>
      <Ant.Layout>
        <EditHeader />

        <Ant.Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Ant.Row>
            <Ant.Col span={18}>
              <Ant.Layout.Content className="bg-white px-2">
                <Account setIsOpen={setIsOpen} />
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
        id={state.id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        getDetail={getDetail}
      />
    </React.Fragment>
  );
};

export default Edit;
