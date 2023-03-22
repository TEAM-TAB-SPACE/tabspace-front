import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Button, Modal, Input } from 'antd';
import useFetch from '../../../hooks/useFetch';
import {
  currentCommentsSelector,
  commentRefetchKeyAtom,
} from '../../../store/comment';
import { API_URL_LECTURE } from '../../../pages/api/lecture';

const { TextArea } = Input;

interface EditModalProps {
  commentId: number;
  isModalOpen: boolean;
  onClickEdit?: () => void;
}

const PLACEHOLDER = '수정할 내용을 입력해주세요.';

function EditModal({ commentId, isModalOpen, onClickEdit }: EditModalProps) {
  const fetch = useFetch();
  const setCommentRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  const currentComment = useRecoilValue(currentCommentsSelector(commentId));

  const onClick = (e: React.SyntheticEvent) => {
    const form = document.querySelector('.comment__edit') as HTMLFormElement;
    const textarea = form.children.namedItem('comment') as HTMLTextAreaElement;

    fetch.put(API_URL_LECTURE.COMMENTS_OTHER, {
      id: commentId,
      comment: textarea.value,
    });

    setCommentRefetchKey('stale');
  };

  return (
    <Modal
      open={isModalOpen}
      title="댓글 수정"
      style={{ top: '40%' }}
      width="280px"
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={e => {
            onClick(e);
            onClickEdit && onClickEdit();
          }}
        >
          수정
        </Button>,
      ]}
    >
      <form className="comment__edit">
        <TextArea
          maxLength={1000}
          name="comment"
          defaultValue={currentComment.comment}
          className="form__textarea"
          style={{ marginTop: '10px', height: '120px', resize: 'none' }}
          placeholder={PLACEHOLDER}
        />
      </form>
    </Modal>
  );
}

export default EditModal;
