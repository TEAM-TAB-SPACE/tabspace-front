import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import text from '../../../styles/text.module.scss';
import layout from '../../../styles/layout.module.scss';
import useFetch from '../../../hooks/useFetch';
import { API_URL_DASHBOARD } from '../../../pages/api/dashboard';
import { missionsRefetchKeyAtom } from '../../../store/dashboard';
import { useSetRecoilState } from 'recoil';

interface MissionPopoverContentProps {
  missionId: number;
  url: string;
}

function MissionPopoverContent({ missionId, url }: MissionPopoverContentProps) {
  const setRefetchKey = useSetRecoilState(missionsRefetchKeyAtom);
  const fetch = useFetch();

  const splitUrl = url.split('/');
  const fileName = splitUrl[splitUrl.length - 1];

  const onClick = () => {
    fetch.delete(API_URL_DASHBOARD.MISSION, { id: missionId });
    setRefetchKey('stale');
  };

  return (
    <>
      {url ? (
        <div className={layout.flex_a_center_j_between}>
          <a
            href={url}
            className={text.ellipsis_oneLine}
            style={{ maxWidth: '130px' }}
          >
            {fileName}
          </a>
          <Button
            onClick={onClick}
            style={{ padding: 0, width: '20px', border: 'none' }}
          >
            <CloseOutlined />
          </Button>
        </div>
      ) : (
        <div>제출된 파일이 없습니다.</div>
      )}
    </>
  );
}

export default MissionPopoverContent;
