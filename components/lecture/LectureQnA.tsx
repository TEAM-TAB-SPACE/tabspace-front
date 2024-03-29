import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { Layout } from 'antd';
import Comments from 'components/comment/Comments';
import CommentForm from 'components/comment/CommentForm';

import useFetch from 'hooks/useFetch';

import {
  commentRefetchKeyAtom,
  currentLectureCommentsAtom,
} from 'store/comment';
import { currentLectureSelector } from 'store/lecture';

import { API_URL_LECTURE } from 'pages/api/lecture';

import variables from 'styles/variables.module.scss';

const { Content } = Layout;

function LectureQnA() {
  const router = useRouter();

  const { videoId } = router.query;

  const [refetchKey, setRefetchKey] = useRecoilState(commentRefetchKeyAtom);

  const selectedLecture = useRecoilValue(currentLectureSelector(`${videoId}`));

  const lectureId = selectedLecture?.id;

  const setCurrentLectureComments = useSetRecoilState(
    currentLectureCommentsAtom,
  );

  const { data } = useFetch({
    url: API_URL_LECTURE.COMMENTS_REVIEWS,
    payload: { id: lectureId },
    refetchKey: { key: refetchKey, setter: setRefetchKey },
  });

  useEffect(() => {
    if (data) {
      setCurrentLectureComments(data);
    }
  }, [data, setCurrentLectureComments]);

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
        <CommentForm {...{ lectureId }} />
      </Content>
      <style jsx global>{`
        .lecture__qna {
          font-size: 16px;
          line-height: 140%;
          padding: 20px 0 10px;
          font-weight: 500;
          border-bottom: 1px solid ${variables.black};
        }
      `}</style>
    </>
  );
}

export default LectureQnA;
