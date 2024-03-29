import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Layout, Menu } from 'antd';

import useMediaQueryState from 'hooks/useMediaQueryState';
import usePlaylist from 'hooks/usePlaylist';

import { currentLectureSelector } from 'store/lecture';
import { INTERNAL } from 'constants/urls';

const { Sider } = Layout;

function LecturePlaylist() {
  const router = useRouter();

  const { videoId } = router.query;

  const [openKey, setOpenKey] = useState<string[]>([]);

  const { isMobile } = useMediaQueryState();

  const playlist = usePlaylist();

  const selectedLecture = useRecoilValue(currentLectureSelector(`${videoId}`));

  useEffect(() => {
    setOpenKey([selectedLecture?.lecture.category.name]);
  }, [selectedLecture]);

  return (
    <>
      <Sider width="35%" className="playlist">
        <Menu
          mode="inline"
          defaultSelectedKeys={[`${videoId}`]}
          openKeys={openKey}
          items={playlist}
          style={{
            width: '100%',
            height: '100%',
          }}
          onClick={({ keyPath: [key] }) =>
            router.push(`${INTERNAL.lecture}/${key}`)
          }
          onOpenChange={openKey => {
            setOpenKey(openKey);
          }}
        />
      </Sider>
      <style jsx global>{`
        .playlist {
          width: 100% !important;
          max-width: 100% !important;
          height: 100vh !important;
          max-height: 100vh !important;

          .ant-menu-root {
            overflow: ${isMobile ? 'visible' : 'scroll'};
          }
        }
      `}</style>
    </>
  );
}

export default LecturePlaylist;
