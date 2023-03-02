import React from "react";
import * as Ant from "antd";
import { IStaff } from "../../../Models/Staff";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddHeader from "./AddHeader";
import Account from "./Account";
import Contact from "./Contact";
import Info from "./Info";
import Status from "./Status";
import useStaffStore from "../../../Store/Staff";
import utils from "../../../Utils";

interface AddProps {}

const Add: React.FC<AddProps> = (props) => {
  const [form] = Ant.Form.useForm();

  const navigate = useNavigate();

  const addStaff = useStaffStore((state) => state.addStaff);

  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

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
    const newId = utils.uuid();
    const newStaff: IStaff = {
      ...staff,
      id: newId,
      key: newId,
    };
    addStaff(newStaff);
    setTimeout(() => {
      form.resetFields();
      toast.success("Thêm mới thành công")
      setIsSubmitting(false);
      navigate("/staff/edit", { state: { id: newId } });
    }, 500);
  };

  return (
    <React.Fragment>
      <Ant.Layout>
        <AddHeader />

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
                <Account />
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
    </React.Fragment>
  );
};

export default Add;
