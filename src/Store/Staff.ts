import { create } from "zustand";
import {
  EDepartment,
  EGender,
  EJobType,
  EOffice,
  EPositionType,
  EStaffStatus,
  ETimeKeeping,
  IStaff,
} from "../Models/Staff";

interface IStaffStore {
  staffs: IStaff[];
  staff: IStaff | null;
  getList: () => IStaff[];
  getDetail: (id: string) => void;
  addStaff: (staff: IStaff) => void;
  updateStaff: (id: string, staff: IStaff) => void;
  changePassword: (id: string, newPass: string) => void;
}

const useStaffStore = create<IStaffStore>((set, get) => ({
  staffs: [
    {
      id: "1",
      key: "1",
      avatar: "",
      email: "nhambontuong68@gmail.com",
      name: "Nhâm Bổn Tường",
      phone: "0793229970",
      firstName: "Tường",
      lastName: "Nhâm",
      position: "Software Engineer",
      staffId: "2007",
      gender: EGender.male,
      positionType: EPositionType.staff,
      office: EOffice.main,
      department: EDepartment.software,
      jobType: EJobType.offical,
      timeKeeping: ETimeKeeping.no,
      status: EStaffStatus.active,
      bg: "rgb(191, 64, 64)",
    },
    {
      id: "2",
      key: "2",
      avatar: "",
      email: "nguyenhuuan@gmail.com",
      name: "Nguyễn Hữu An",
      phone: "",
      firstName: "An",
      lastName: "Nguyễn",
      position: "Software Engineer",
      staffId: "2006",
      gender: EGender.male,
      positionType: EPositionType.staff,
      office: EOffice.main,
      department: EDepartment.software,
      jobType: EJobType.offical,
      timeKeeping: ETimeKeeping.no,
      status: EStaffStatus.active,
      bg: "rgb(45, 210, 210)",
    },
    {
      id: "3",
      key: "3",
      avatar: "",
      email: "nguyentanduc@gmail.com",
      name: "Nguyễn Tấn Đức",
      phone: "",
      firstName: "Đức",
      lastName: "Nguyễn",
      position: "Software Engineer",
      staffId: "2005",
      gender: EGender.male,
      positionType: EPositionType.staff,
      office: EOffice.main,
      department: EDepartment.software,
      jobType: EJobType.offical,
      timeKeeping: ETimeKeeping.no,
      status: EStaffStatus.active,
      bg: "rgb(58, 94, 120)",
    },
    {
      id: "4",
      key: "4",
      avatar: "",
      email: "nguyenkimquy@gmail.com",
      name: "Nguyễn Kim Quy",
      phone: "",
      firstName: "Quy",
      lastName: "Nguyễn",
      position: "Software Engineer",
      staffId: "2004",
      gender: EGender.male,
      positionType: EPositionType.staff,
      office: EOffice.main,
      department: EDepartment.software,
      jobType: EJobType.offical,
      timeKeeping: ETimeKeeping.no,
      status: EStaffStatus.active,
      bg: "rgb(134, 113, 45)",
    },
    {
      id: "5",
      key: "5",
      avatar: "",
      email: "nguyenducthuan@gmail.com",
      name: "Nguyễn Đức Thuận",
      phone: "",
      firstName: "Thuận",
      lastName: "Nguyễn",
      position: "Software Engineer",
      staffId: "2002",
      gender: EGender.male,
      positionType: EPositionType.staff,
      office: EOffice.main,
      department: EDepartment.software,
      jobType: EJobType.offical,
      timeKeeping: ETimeKeeping.no,
      status: EStaffStatus.active,
      bg: "rgb(191, 130, 64)",
    },
    {
      id: "6",
      key: "6",
      avatar: "",
      email: "huynhsu@gmail.com",
      name: "Huỳnh Sự",
      phone: "",
      firstName: "Sự",
      lastName: "Huỳnh",
      position: "General Manager",
      staffId: "2001",
      gender: EGender.male,
      positionType: EPositionType.chiefOffice,
      office: EOffice.main,
      department: EDepartment.software,
      jobType: EJobType.offical,
      timeKeeping: ETimeKeeping.no,
      status: EStaffStatus.active,
      bg: "rgb(58, 120, 64)",
    },
    {
      id: "7",
      key: "7",
      avatar: "",
      email: "voduytuan@gmail.com",
      name: "Võ Duy Tuấn",
      phone: "",
      firstName: "Tuấn",
      lastName: "Võ",
      position: "CEO",
      staffId: "2000",
      gender: EGender.male,
      positionType: EPositionType.ceo,
      office: EOffice.main,
      department: EDepartment.bod,
      jobType: EJobType.offical,
      timeKeeping: ETimeKeeping.no,
      status: EStaffStatus.active,
      bg: "rgb(58, 120, 64)",
    },
  ],
  staff: null,

  getList: () => {
    return get().staffs;
  },

  getDetail: (id) => {
    console.log(id);

    set((state) => ({
      ...state,
      staff: state.staffs.find((s) => s.id === id),
    }));
  },
  addStaff: (staff) => {
    set((state) => ({
      ...state,
      staff: staff,
      staffs: [...state.staffs, staff],
    }));
  },

  updateStaff: (id, staff) =>
    set((state) => ({
      ...state,
      staffs: state.staffs.map((s) => {
        if (s.id === id) return { ...s, ...staff };
        return { ...s };
      }),
    })),

  changePassword: (id, newPass) =>
    set((state) => ({
      ...state,
      staffs: state.staffs.map((s) => {
        if (s.id === id) return { ...s, password: newPass };
        return { ...s };
      }),
    })),
}));

export default useStaffStore;
