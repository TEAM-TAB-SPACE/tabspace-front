import { useSetRecoilState } from 'recoil';
import { Input } from 'antd';
import { Button } from 'antd';
import useFetch from '../../hooks/useFetch';
import variables from '../../styles/variables.module.scss';
import { commentRefetchKeyAtom } from '../../store/comment';
import { API_URL_LECTURE } from '../../pages/api/lecture';

const { TextArea } = Input;

interface ReplyFormProps {
  commentId: number;
  hideReplyForm?: () => void;
}

function ReplyForm({ commentId, hideReplyForm }: ReplyFormProps) {
  const fetch = useFetch();
  const setCommentRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  const onSubmit = (e: React.SyntheticEvent) => {
    const form = e.target as HTMLFormElement;
    const textarea = form.children.namedItem('reply') as HTMLTextAreaElement;
    e.preventDefault();

    fetch.post(API_URL_LECTURE.COMMENTS_DEPTH2, {
      lecture_comment: commentId,
      comment: textarea.value,
    });

    textarea.value = '';
    hideReplyForm && hideReplyForm();
    setCommentRefetchKey('stale');
  };

  return (
    <>
      <form className="reply__form" onSubmit={onSubmit}>
        <TextArea
          maxLength={1000}
          name="reply"
          className="form__textarea"
          style={{ marginTop: '20px', height: '80px', resize: 'none' }}
        />
        <Button
          htmlType="submit"
          size="small"
          type="primary"
          className="form__submitButton"
          style={{ margin: '10px 0 30px calc(100% - 70px)' }}
        >
          답글 등록
        </Button>
      </form>
      <style jsx global>{`
        .comment__form .ant-input {
          &:focus,
          &:hover {
            border-color: ${variables.purpleLight};
          }
        }
      `}</style>
    </>
  );
}

export default ReplyForm;
