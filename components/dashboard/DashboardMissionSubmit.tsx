import { InboxOutlined } from '@ant-design/icons';
import { Form, Upload, Select } from 'antd';
import variables from '../../styles/variables.module.scss';

const { Option } = Select;
const { Dragger } = Upload;

function DashboardMissionSubmit() {
  return (
    <>
      <Form className="dashboard__missionSubmit">
        <Select defaultValue="landing" size="middle">
          <Option value="landing">랜딩페이지 개발</Option>
          <Option value="mbti">mbti 개발</Option>
          <Option value="django">장고 어드민 페이지 개발</Option>
          <Option value="mvp">mvp 기업협업 프로젝트</Option>
        </Select>
        <Dragger>
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
