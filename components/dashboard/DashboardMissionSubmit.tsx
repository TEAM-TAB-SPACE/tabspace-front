import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { InboxOutlined } from '@ant-design/icons';
import { Form, Upload, Select } from 'antd';
import variables from '../../styles/variables.module.scss';
import { missionsSelectOptionsSelector } from '../../store/dashboard';
import { API_URL_DASHBOARD } from '../../pages/api/dashboard';

const { Option } = Select;
const { Dragger } = Upload;

function DashboardMissionSubmit() {
  const missionsSelectOptions = useRecoilValue(missionsSelectOptionsSelector);
  const defaultSelectedValue =
    missionsSelectOptions && missionsSelectOptions[0]?.id;
  const [selectedValue, setSelectedValue] = useState<number>();

  useEffect(() => {
    setSelectedValue(defaultSelectedValue);
  }, [defaultSelectedValue]);

  return (
    <>
      <Form className="dashboard__missionSubmit">
        <Select
          value={selectedValue}
          size="middle"
          style={{ width: '200px' }}
          onChange={selectedValue => {
            setSelectedValue(selectedValue);
          }}
        >
          {missionsSelectOptions?.map(({ id, title }) => (
            <Option value={id}>{title}</Option>
          ))}
        </Select>
        <Dragger
          multiple={false}
          maxCount={1}
          data={{ id: selectedValue }}
          fileList={[]}
          action={`api${API_URL_DASHBOARD.MISSION}`}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            이곳을 클릭하거나 파일을 드래그하세요.
          </p>
          <p className="ant-upload-hint">
            하나의 파일만 제출 가능합니다. 여러 개의 파일은 압축 폴더로 제출해
            주세요.
          </p>
        </Dragger>
      </Form>
      <style jsx global>{`
        .dashboard__missionSubmit {
          width: 100%;

          .anticon {
            color: ${variables.primary} !important;
          }

          .ant-select {
            margin-bottom: 20px;

            &:hover .ant-select-selector,
            &-focused .ant-select-selector {
              border-color: ${variables.primary} !important;
            }
          }

          .ant-upload-drag:hover {
            border-color: ${variables.primary} !important;
          }
        }
      `}</style>
    </>
  );
}

export default DashboardMissionSubmit;
