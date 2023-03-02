import React from "react";
import * as Ant from "antd";
import options from "../../../Options";

interface StatusProps {}

const Status: React.FC<StatusProps> = (props) => {
  return (
    <React.Fragment>
      <Ant.Form.Item
        name="timeKeeping"
        label="Hình thức chấm công"
        required
        rules={[
          { required: true, message: "Vui lòng chọn hình thức chấm công" },
        ]}
      >
        <Ant.Select
          showSearch
          placeholder="Chọn hình thức chấm công"
          optionFilterProp="children"
          options={options.timeKeeping}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />
      </Ant.Form.Item>

      <Ant.Form.Item
        name="status"
        label="Trạng thái"
        required
        rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}
      >
        <Ant.Select
          showSearch
          placeholder="Chọn trạng thái"
          optionFilterProp="children"
          options={options.staffStatus}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />
      </Ant.Form.Item>
      
      <Ant.Form.Item>
        <Ant.Button
          type="primary"
          size="large"
          htmlType="submit"
          className="w-full bg-blue-500 rounded"
        >
          Lưu thông tin
        </Ant.Button>
      </Ant.Form.Item>
    </React.Fragment>
  );
};

export default Status;
