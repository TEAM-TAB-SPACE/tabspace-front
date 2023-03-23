import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Form } from 'antd';
import MissionUpload from './MissionUpload';
import MissionSelect from './MissionSelect';
import variables from '../../../styles/variables.module.scss';
import { missionsSelectOptionsSelector } from '../../../store/dashboard';

function DashboardMissionSubmit() {
  const missionsSelectOptions = useRecoilValue(missionsSelectOptionsSelector);

  const defaultSelectedValue =
    missionsSelectOptions && missionsSelectOptions[0]?.id;

  const [selectedValue, setSelectedValue] = useState<number>(0);

  useEffect(() => {
    setSelectedValue(defaultSelectedValue);
  }, [defaultSelectedValue]);

  const onSelectChange = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <>
      <Form className="dashboard__missionSubmit">
        <MissionSelect
          options={missionsSelectOptions}
          value={selectedValue}
          onChange={onSelectChange}
        />
        <MissionUpload missionId={selectedValue} />
      </Form>
      <style jsx global>{`
        .dashboard__missionSubmit {
          width: 100%;

          .anticon {
            color: ${variables.primary} !important;
          }
        }
      `}</style>
    </>
  );
}

export default DashboardMissionSubmit;
