import React from "react";
import * as Ant from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { IStaff } from "../../../Models/Staff";
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

  const staff = useStaffStore((state) => state.staff);

  const getDetail = useStaffStore((state) => state.getDetail);

  const updateStaff = useStaffStore((state) => state.updateStaff);

  React.useEffect(() => {
    getDetail(state.id);
  });

  React.useEffect(() => {
    
  }, [staff]);

  const initialValues: IStaff = {
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
  };

  const onSubmit = (staff: IStaff) => {
    updateStaff(state.id, staff);
    setTimeout(() => navigate("/staff"), 500);
  };

  return (
    <React.Fragment>
      <Ant.Layout>
        <EditHeader />

        <Ant.Form
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
                <Status />
              </Ant.Layout.Content>
            </Ant.Col>
          </Ant.Row>
        </Ant.Form>
      </Ant.Layout>

      <ModalPassword isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
};

export default Edit;
