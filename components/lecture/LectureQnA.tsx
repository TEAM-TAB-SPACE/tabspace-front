import { Layout } from 'antd';
import Comments from '../comment/Comments';
import CommentForm from '../comment/CommentForm';
import variables from '../../styles/variables.module.scss';
import useFetch from '../../hooks/useFetch';
import { commentRefetchKeyAtom } from '../../store/comment';
import { API_URL_LECTURE } from '../../pages/api/lecture';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { currentLectureSelector } from '../../store/lecture';

const { Content } = Layout;

function LectureQnA() {
  const router = useRouter();
  const { videoId } = router.query;

  const selectedLecture = useRecoilValue(currentLectureSelector(`${videoId}`));

  const { data } = useFetch(
    API_URL_LECTURE.COMMENTS_READ,
    { id: selectedLecture?.id },
    commentRefetchKeyAtom,
  );

  const comments = data;

  return (
    <>
      <div className="lecture__qna">질의응답</div>
      <Content
        style={{
          padding: '10px 25px 0',
        }}
      >
        <Comments {...{ depth: 1, comments }} />
        <CommentForm />
      </Content>
      <style jsx global>{`
        .lecture__qna {
          font-size: 16px;
          line-height: 140%;
          padding: 20px 0 10px;
          font-weight: 500;
          border-bottom: 1px solid ${variables.black};
        }

        .ant-btn-primary {
          background-color: ${variables.primary};

          &:not(:disabled):hover {
            background-color: ${variables.primary};
            opacity: 0.9;
          }
        }
      `}</style>
    </>
  );
}

export default LectureQnA;
