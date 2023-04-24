import { useSetRecoilState } from 'recoil';

import { Input, Button } from 'antd';

import useFetch from 'hooks/useFetch';

import { commentRefetchKeyAtom } from 'store/comment';

import { API_URL_LECTURE } from 'pages/api/lecture';

const { TextArea } = Input;

interface ReplyFormProps {
  commentId: number;
  hideReplyForm?: () => void;
}

function ReplyForm({ commentId, hideReplyForm }: ReplyFormProps) {
  const fetch = useFetch();

  const setCommentRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  const handleReplySubmit = (e: React.SyntheticEvent) => {
    const form = e.target as HTMLFormElement;
    const textarea = form.children.namedItem('reply') as HTMLTextAreaElement;
    e.preventDefault();

    if (!textarea.value) return;

    fetch.post(API_URL_LECTURE.COMMENTS_DEPTH2, {
      lecture_comment: commentId,
      comment: textarea.value,
    });

    textarea.value = '';
    hideReplyForm && hideReplyForm();
    setCommentRefetchKey(() => 'stale');
  };

  return (
    <form className="reply__form" onSubmit={handleReplySubmit}>
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
  );
}

export default ReplyForm;
