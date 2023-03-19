import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import text from '../../../styles/text.module.scss';
import layout from '../../../styles/layout.module.scss';

function MissionPopoverContent({ url }: { url: string }) {
  const splitUrl = url.split('/');
  const fileName = splitUrl[splitUrl.length - 1];

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
          <Button style={{ padding: 0, width: '20px', border: 'none' }}>
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
