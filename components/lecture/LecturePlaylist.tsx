import { useRecoilValue } from 'recoil';
import { Layout, Menu } from 'antd';
import { playlistAtom } from '../../store/lecture';
import useMediaQueryState from '../../hooks/useMediaQueryState';
import variables from '../../styles/variables.module.scss';
import { useRouter } from 'next/router';

const { Sider } = Layout;

interface LecturePlaylist {
  defaultKeys: {
    videoId: string;
    category: string;
  };
}

function LecturePlaylist({ defaultKeys }: LecturePlaylist) {
  const router = useRouter();
  const { isMobile } = useMediaQueryState();
  const playlistItems = useRecoilValue(playlistAtom);

  return (
    <>
      <Sider width="35%" className="playlist">
        <Menu
          mode="inline"
          defaultSelectedKeys={[defaultKeys.videoId]}
          defaultOpenKeys={[defaultKeys.category]}
          items={playlistItems}
          style={{
            width: '100%',
            height: '100%',
          }}
          onClick={({ keyPath: [key] }) => router.push(`/lecture/${key}`)}
        />
      </Sider>
      <style jsx global>{`
        .playlist {
          width: 100% !important;
          max-width: 100% !important;
          height: 100vh !important;
          max-height: 100vh !important;
        }

        .ant-menu {
          &-root {
            overflow: ${isMobile ? 'visible' : 'scroll'};
          }

          &-submenu-selected > &-submenu-title {
            color: ${variables.primary} !important;
          }

          &-item-selected {
            background-color: ${variables.purpleOpacity} !important;
            color: ${variables.primary} !important;
          }

          &-item:not(.ant-menu-item-selected):active,
          &-light:not(.ant-menu-horizontal) .ant-menu-submenu-title:active {
            background-color: ${variables.purpleOpacity} !important;
          }
        }
      `}</style>
    </>
  );
}

export default LecturePlaylist;
