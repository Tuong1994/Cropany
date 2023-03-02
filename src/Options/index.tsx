import {
  EDepartment,
  EGender,
  EJobType,
  EOffice,
  EPositionType,
  EStaffStatus,
  ETimeKeeping,
} from "../Models/Staff";

export interface IOption {
  label: string;
  value: number | string;
}

const options = {
  gender: [
    { label: "Nam", value: EGender.male },
    { label: "Nữ", value: EGender.female },
  ],
  staffStatus: [
    { label: "Có hiệu lực", value: EStaffStatus.active },
    { label: "Vô hiệu lực", value: EStaffStatus.unActive },
  ],
  timeKeeping: [
    { label: "Không có chấm công", value: ETimeKeeping.no },
    { label: "Chấm công theo Văn phòng làm việc", value: ETimeKeeping.yes },
  ],
  department: [
    { label: "BOD", value: EDepartment.bod },
    { label: "Software", value: EDepartment.software },
    { label: "Customer Service", value: EDepartment.cs },
    { label: "Sale", value: EDepartment.sale },
  ],
  positionType: [
    { label: "Mới tốt nghiệp / thực tập", value: EPositionType.intern },
    { label: "Nhân viên", value: EPositionType.staff },
    { label: "Trưởng nhóm / Giám sát", value: EPositionType.leader },
    { label: "Phó phòng", value: EPositionType.deputy },
    { label: "Trợ lý quản lý cửa hàng", value: EPositionType.managerAssitant },
    { label: "Trưởng phòng", value: EPositionType.chiefOffice },
    { label: "Quản lý cửa hàng", value: EPositionType.manager },
    { label: "Phó giám đốc", value: EPositionType.vicePresident },
    { label: "Giám đốc", value: EPositionType.director },
    { label: "Giám đốc điều hành", value: EPositionType.ceo },
    { label: "Phó chủ tịch", value: EPositionType.viceChairman },
    { label: "Chủ tịch", value: EPositionType.chairman },
  ],
  jobType: [
    { label: "Nhân viên chính thức", value: EJobType.offical },
    { label: "Bán thời gian", value: EJobType.parttime },
    { label: "Làm việc ngoài giờ", value: EJobType.outime },
    { label: "Thử việc", value: EJobType.probation },
    { label: "Nhân viên thời vụ", value: EJobType.intern },
    { label: "Làm dự án", value: EJobType.outsource },
  ],
  office: [{ label: "Văn phòng chính", value: EOffice.main }],
};

export default options;
