import Comment from '../comment/Comment';
import CommentForm from '../comment/CommentForm';
import { Layout } from 'antd';
import variables from '../../styles/variables.module.scss';

const { Content } = Layout;

function LectureQnA() {
  return (
    <>
      <div className="lecture__qna">질의응답</div>
      <Content
        style={{
          padding: '10px 25px 0',
        }}
      >
        <Comment
          isMyComment={true}
          userBadgeData={{ userName: '모찌', elapsedTime: '10분전' }}
          content="질문이있어요"
        />
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
