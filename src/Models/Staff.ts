export enum EGender {
  male = 1,
  female = 2,
}

export enum EStaffStatus {
  active = 1,
  unActive = 2,
}

export enum EJobType {
  offical = 1,
  parttime = 2,
  outime = 3,
  probation = 4,
  intern = 5,
  outsource = 6,
}

export enum EPositionType {
  intern = 1,
  staff = 2,
  leader = 3,
  deputy = 4,
  managerAssitant = 5,
  chiefOffice = 6,
  manager = 7,
  vicePresident = 8,
  director = 9,
  ceo = 10,
  viceChairman = 11,
  chairman = 12,
}

export enum ETimeKeeping {
  no = 1,
  yes = 2,
}

export enum EDepartment {
  bod = 1,
  software = 2,
  cs = 3,
  sale = 4,
}

export enum EOffice {
  main = 1,
}
export interface IStaff {
  id?: string;
  key?: any;
  avatar?: string;
  email: string;
  password?: string;
  name: string;
  phone: string;
  gender: number | null;
  firstName?: string;
  lastName?: string;
  positionType: number | null;
  position: string;
  office: number | null;
  department: number | null;
  staffId: string;
  jobType: number | null;
  timeKeeping: number | null;
  status: number | null;
  bg?: string;
}
