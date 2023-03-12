import { Layout, Menu } from 'antd';
import { useSetRecoilState } from 'recoil';
import { PlaylistItem, selectedLectureKeyPathAtom } from '../../store/lecture';

const { Sider } = Layout;

interface LecturePlaylistProps {
  menuItems: PlaylistItem[];
}

function LecturePlaylist({ menuItems }: LecturePlaylistProps) {
  const setSelectedLectureKeyPath = useSetRecoilState(
    selectedLectureKeyPathAtom,
  );

  return (
    <>
      <Sider width="35%">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['menu1']}
          items={menuItems}
          style={{
            width: '100%',
            height: '100%',
          }}
          onClick={item => setSelectedLectureKeyPath(item.keyPath)}
        />
      </Sider>
    </>
  );
}

export default LecturePlaylist;
