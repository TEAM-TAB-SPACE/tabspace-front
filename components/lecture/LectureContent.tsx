import { useRecoilValue } from 'recoil';
import { Layout } from 'antd';
import LecturePlaylist from './LecturePlaylist';
import LecturePlayer from './LecturePlayer';
import LectureQnA from './LectureQnA';
import { currentLectureSelector } from '../../store/lecture';
import LectureTabs from './LectureTabs';
import useMediaQueryState from '../../hooks/useMediaQueryState';
import { useRouter } from 'next/router';

const { Content } = Layout;

function LectureContent() {
  const router = useRouter();
  const { videoId } = router.query;

  const { isMobile } = useMediaQueryState();
  const selectedLecture = useRecoilValue(currentLectureSelector(`${videoId}`));
  const { title, category } = selectedLecture?.lecture;

  return (
    <>
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Content className="lecture__content">
          <LecturePlayer videoId={`${videoId}`} />
          {isMobile ? (
            <LectureTabs />
          ) : (
            <Content style={{ padding: '32px 24px' }}>
              <div className="lecture__title">{title}</div>
              <LectureQnA />
            </Content>
          )}
        </Content>
        {!isMobile && (
          <LecturePlaylist defaultKeys={{ videoId: `${videoId}`, category }} />
        )}
      </Layout>
      <style jsx global>{`
        .lecture {
          &__title {
            font-size: 20px;
            line-height: 140%;
            font-weight: 700;
          }

          &__content {
            overflow: scroll;
            height: 100vh;
            max-height: 100vh;
          }
        }
      `}</style>
    </>
  );
}

export default LectureContent;
