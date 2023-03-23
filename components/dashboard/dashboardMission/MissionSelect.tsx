import { Select } from 'antd';
import variables from '../../../styles/variables.module.scss';
import { MissionSelectOption } from '../../../store/dashboard';

const { Option } = Select;

interface MissionSelectProps {
  options: MissionSelectOption[];
  value: number;
  onChange: (value: number) => void;
}

function MissionSelect({ options, value, onChange }: MissionSelectProps) {
  return (
    <>
      <Select
        value={value}
        size="middle"
        style={{ width: '200px' }}
        onChange={onChange}
      >
        {options?.map(({ id, title }) => (
          <Option key={id} value={id}>
            {title}
          </Option>
        ))}
      </Select>
      <style jsx global>{`
        .dashboard__missionSubmit {
          .ant-select {
            margin-bottom: 20px;

            &:hover .ant-select-selector,
            &-focused .ant-select-selector {
              border-color: ${variables.primary} !important;
            }
          }
        }
      `}</style>
    </>
  );
}

export default MissionSelect;
