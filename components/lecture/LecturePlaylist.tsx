import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import useMediaQueryState from '../../hooks/useMediaQueryState';
import variables from '../../styles/variables.module.scss';
import usePlaylist from '../../hooks/usePlaylist';

const { Sider } = Layout;

interface LecturePlaylist {
  defaultKeys: {
    selectedKey: string;
    openKey: string;
  };
}

function LecturePlaylist({ defaultKeys }: LecturePlaylist) {
  const router = useRouter();
  const playlist = usePlaylist();
  const { isMobile } = useMediaQueryState();
  const [openKey, setOpenKey] = useState([defaultKeys.openKey]);

  return (
    <>
      <Sider width="35%" className="playlist">
        <Menu
          mode="inline"
          defaultSelectedKeys={[defaultKeys.selectedKey]}
          openKeys={[...openKey]}
          items={playlist}
          style={{
            width: '100%',
            height: '100%',
          }}
          onClick={({ keyPath: [key] }) => router.push(`/lecture/${key}`)}
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
