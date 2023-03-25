import { useSetRecoilState } from 'recoil';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import variables from '../../../styles/variables.module.scss';
import useMessage from '../../../hooks/useMessage';
import { missionsRefetchKeyAtom } from '../../../store/dashboard';
import { API_URL_DASHBOARD } from '../../../pages/api/dashboard';
import { getCookie } from 'cookies-next';

const { Dragger } = Upload;

interface MissionUploadProps {
  missionId: number;
}

const SUCCESS_MESSAGE = '미션 제출이 완료되었습니다';
const ERROR_MESSAGE = '에러가 발생했습니다. 다시 제출해 주세요';
const UPLOAD_TEXT = '이곳을 클릭하거나 파일을 드래그하세요.';
const UPLOAD_HINT =
  '하나의 파일만 제출 가능합니다. 여러 개의 파일은 압축 폴더로 제출해주세요.';

function MissionUpload({ missionId }: MissionUploadProps) {
  const setRefetchKey = useSetRecoilState(missionsRefetchKeyAtom);
  const { contextHolder, success, error } = useMessage();

  const draggerProps = {
    multiple: false,
    maxCount: 1,
    data: { id: missionId },
    headers: { Authorization: `Bearer ${getCookie('accessToken')}` },
    action: `${process.env.NEXT_PUBLIC_BASE_URL}${API_URL_DASHBOARD.MISSION}`,
    showUploadList: false,
    onChange: (info: UploadChangeParam<UploadFile<unknown>>) => {
      if (info.file.status === 'done') {
        success(SUCCESS_MESSAGE);
        setRefetchKey('stale');
      } else if (info.file.status === 'error') {
        error(ERROR_MESSAGE);
      }
    },
  };

  return (
    <>
      {contextHolder}
      <Dragger {...draggerProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">{UPLOAD_TEXT}</p>
        <p className="ant-upload-hint">{UPLOAD_HINT}</p>
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
