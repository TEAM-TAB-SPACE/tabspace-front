import { Layout, Menu } from 'antd';
import { useSetRecoilState } from 'recoil';
import usePlaylist from '../../hooks/usePlaylist';
import { selectedLectureKeyPathAtom } from '../../store/lecture';

const { Sider } = Layout;

function LecturePlaylist() {
  const playlist = usePlaylist();
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
          items={playlist}
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
