import { useSetRecoilState } from 'recoil';
import { Input } from 'antd';
import { Button } from 'antd';
import useFetch from '../../hooks/useFetch';
import { commentRefetchKeyAtom } from '../../store/comment';
import { API_URL_LECTURE } from '../../pages/api/lecture';
import { COMMENT_FORM_PLACEHOLDER } from '../../constant/placeholders';

const { TextArea } = Input;

interface CommentFormProps {
  lectureId: number;
}

function CommentForm({ lectureId }: CommentFormProps) {
  const fetch = useFetch();
  const setCommentRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  const onSubmit = (e: React.SyntheticEvent) => {
    const form = e.target as HTMLFormElement;
    const textarea = form.children.namedItem('comment') as HTMLTextAreaElement;
    e.preventDefault();

    fetch.post(API_URL_LECTURE.COMMENTS_DEPTH1, {
      id: lectureId,
      comment: textarea.value,
    });

    textarea.value = '';
    setCommentRefetchKey(() => 'stale');
  };

  return (
    <form className="comment__form" onSubmit={onSubmit}>
      <TextArea
        maxLength={1000}
        name="comment"
        className="form__textarea"
        style={{ marginTop: '20px', height: '120px', resize: 'none' }}
        placeholder={COMMENT_FORM_PLACEHOLDER}
      />
      <Button
        htmlType="submit"
        type="primary"
        className="form__submitButton"
        style={{ width: '100%', height: '40px', marginTop: '20px' }}
      >
        등록하기
      </Button>
    </form>
  );
}

export default CommentForm;
