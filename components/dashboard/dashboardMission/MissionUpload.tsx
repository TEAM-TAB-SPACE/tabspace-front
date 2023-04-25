import { useSetRecoilState } from 'recoil';
import { getCookie } from 'cookies-next';

import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

import useMessage from 'hooks/useMessage';

import { missionsRefetchKeyAtom } from 'store/dashboard';

import { MISSION_UPLOAD_MESSAGES } from 'constant/messages';

import { API_URL_DASHBOARD } from 'pages/api/dashboard';

//types
import { UploadChangeParam, UploadFile } from 'antd/es/upload';

const { Dragger } = Upload;

interface MissionUploadProps {
  missionId: number;
}

function MissionUpload({ missionId }: MissionUploadProps) {
  const setRefetchKey = useSetRecoilState(missionsRefetchKeyAtom);
  const { contextHolder, success, error } = useMessage();

  const draggerProps = {
    multiple: false,
    maxCount: 1,
    data: { id: missionId },
    headers: { Authorization: `Bearer ${getCookie('access')}` },
    action: `${process.env.NEXT_PUBLIC_BASE_URL}${API_URL_DASHBOARD.MISSION}`,
    showUploadList: false,
    onChange: (info: UploadChangeParam<UploadFile<unknown>>) => {
      if (info.file.status === 'done') {
        success(MISSION_UPLOAD_MESSAGES.success);
        setRefetchKey(() => 'stale');
      } else if (info.file.status === 'error') {
        error(MISSION_UPLOAD_MESSAGES.error);
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
        <p className="ant-upload-text">{MISSION_UPLOAD_MESSAGES.uploadText}</p>
        <p className="ant-upload-hint">{MISSION_UPLOAD_MESSAGES.uploadHint}</p>
      </Dragger>
    </>
  );
}

export default MissionUpload;
