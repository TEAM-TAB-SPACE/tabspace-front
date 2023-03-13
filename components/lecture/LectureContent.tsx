import { useRecoilValue } from 'recoil';
import { Layout } from 'antd';
import LecturePlaylist from './LecturePlaylist';
import LecturePlayer from './LecturePlayer';
import LectureQnA from './LectureQnA';
import { currentLectureSelector, PlaylistItem } from '../../store/lecture';

const { Content } = Layout;

interface LectureContentProps {
  playlistItems: PlaylistItem[];
}

function LectureContent({ playlistItems }: LectureContentProps) {
  const selectedLecture = useRecoilValue(currentLectureSelector);
  const { title, videoId } = selectedLecture?.lecture;

  return (
    <>
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Content>
          <LecturePlayer videoId={videoId} />
          <Content style={{ padding: '32px 24px' }}>
            <div className="lecture__title">{title}</div>
            <LectureQnA />
          </Content>
        </Content>
        <LecturePlaylist menuItems={playlistItems} />
      </Layout>
      <style jsx>{`
        .lecture__title {
          font-size: 20px;
          line-height: 140%;
          padding-bottom: 20px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

export default LectureContent;
