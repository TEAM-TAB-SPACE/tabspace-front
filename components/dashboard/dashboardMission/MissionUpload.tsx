import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import variables from '../../../styles/variables.module.scss';
import { API_URL_DASHBOARD } from '../../../pages/api/dashboard';

const { Dragger } = Upload;

interface MissionUploadProps {
  missionId: number;
}

function MissionUpload({ missionId }: MissionUploadProps) {
  return (
    <>
      <Dragger
        multiple={false}
        maxCount={1}
        data={{ id: missionId }}
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
      <style jsx global>{`
        .dashboard__missionSubmit {
          .ant-upload-drag:hover {
            border-color: ${variables.primary} !important;
          }
        }
      `}</style>
    </>
  );
}

export default MissionUpload;
