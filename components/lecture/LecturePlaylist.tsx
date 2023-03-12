import { Layout, Menu } from 'antd';
import usePlaylist from '../../hooks/usePlaylist';

const { Sider } = Layout;

function LecturePlaylist() {
  const playlist = usePlaylist();

  return (
    <>
      <Sider width="35%">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            width: '100%',
            height: '100%',
          }}
          items={playlist}
        />
      </Sider>
    </>
  );
}

export default LecturePlaylist;
