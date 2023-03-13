import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import LecturePlaylist from './LecturePlaylist';
import LectureQnA from './LectureQnA';
import { Layout } from 'antd';

const { Content } = Layout;

function LectureTabs() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `강의목록`,
      children: <LecturePlaylist />,
    },
    {
      key: '2',
      label: `강의질문`,
      children: (
        <Content style={{ padding: '0 24px 32px' }}>
          <LectureQnA />
        </Content>
      ),
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
      <style jsx global>{`
        .ant-tabs-nav {
          margin: 0 !important;

          &-wrap {
            padding: 0 24px;
          }
        }
      `}</style>
    </>
  );
}

export default LectureTabs;
