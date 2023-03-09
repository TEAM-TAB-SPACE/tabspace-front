import { Layout, Menu } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((_, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function LecturePlaylist() {
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
          items={items}
        />
      </Sider>
    </>
  );
}

export default LecturePlaylist;
