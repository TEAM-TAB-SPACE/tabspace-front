import { useSetRecoilState } from 'recoil';

import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import useFetch from 'hooks/useFetch';

import { missionsRefetchKeyAtom } from 'store/dashboard';

import { MISSION_POPUP_NO_FILE_MESSAGE } from 'constant/messages';

import { API_URL_DASHBOARD } from 'pages/api/dashboard';

import text from 'styles/text.module.scss';
import layout from 'styles/layout.module.scss';

interface MissionPopoverContentProps {
  files: { id: number; url: string }[];
}

function MissionPopoverContent({ files }: MissionPopoverContentProps) {
  const setRefetchKey = useSetRecoilState(missionsRefetchKeyAtom);
  const fetch = useFetch();

  const file = files[0];

  const splitUrl = file?.url.split('/');
  const fileName = splitUrl && splitUrl[splitUrl.length - 1];

  const onClick = () => {
    fetch.delete(API_URL_DASHBOARD.MISSION, { id: file.id });
    setRefetchKey(() => 'stale');
  };

  return (
    <>
      {file ? (
        <div className={layout.flex_a_center_j_between}>
          <a
            href={file.url}
            className={text.ellipsis_oneLine}
            style={{ maxWidth: '130px' }}
          >
            {fileName}
          </a>
          <Button
            onClick={onClick}
            style={{ padding: 0, width: '20px', border: 'none' }}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ) : (
        <div>{MISSION_POPUP_NO_FILE_MESSAGE}</div>
      )}
    </>
  );
}

export default MissionPopoverContent;
