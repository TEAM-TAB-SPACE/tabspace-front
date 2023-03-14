import { useRecoilValue } from 'recoil';
import { Layout, Menu } from 'antd';
import { playlistAtom } from '../../store/lecture';
import useMediaQueryState from '../../hooks/useMediaQueryState';
import variables from '../../styles/variables.module.scss';
import { useRouter } from 'next/router';

const { Sider } = Layout;

function LecturePlaylist() {
  const router = useRouter();
  const { isMobile } = useMediaQueryState();
  const playlistItems = useRecoilValue(playlistAtom);

  return (
    <>
      <Sider width="35%" className="playlist">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['menu1']}
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
          overflow: ${isMobile ? 'visible' : 'scroll'};

          &-submenu-selected > &-submenu-title {
            color: ${variables.primary} !important;
          }

          &-item-selected {
            background-color: ${variables.purpleOpacity} !important;
            color: ${variables.primary} !important;
          }
        }
      `}</style>
    </>
  );
}

export default LecturePlaylist;
