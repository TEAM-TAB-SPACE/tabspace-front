import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import LecturePlaylist from './LecturePlaylist';
import LecturePlayer from './LecturePlayer';
import LectureQnA from './LectureQnA';
import LectureTabs from './LectureTabs';
import useMediaQueryState from '../../hooks/useMediaQueryState';
import { currentLectureSelector } from '../../store/lecture';
import { commentRefetchKeyAtom } from '../../store/comment';

const { Content } = Layout;

function LectureContent() {
  const router = useRouter();
  const { videoId } = router.query;

  const { isMobile } = useMediaQueryState();
  const selectedLecture = useRecoilValue(currentLectureSelector(`${videoId}`));

  const setRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  useEffect(() => {
    setRefetchKey(() => 'stale');
  }, [isMobile, setRefetchKey]);

  return (
    <>
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Content className="lecture__content">
          <LecturePlayer
            videoId={`${videoId}`}
            lectureroomId={selectedLecture?.id}
          />
          {isMobile ? (
            <LectureTabs />
          ) : (
            <Content style={{ padding: '32px 24px' }}>
              <div className="lecture__title">
                {selectedLecture?.lecture.title}
              </div>
              <LectureQnA />
            </Content>
          )}
        </Content>
        {!isMobile && <LecturePlaylist />}
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
