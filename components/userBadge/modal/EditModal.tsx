import { useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Button, Modal, Input } from 'antd';
import {
  currentCommentSelector,
  commentRefetchKeyAtom,
} from '../../../store/comment';
import useComment from '../../../hooks/useComment';

const { TextArea } = Input;

interface EditModalProps {
  depth: 1 | 2;
  commentId: number;
  isModalOpen: boolean;
  onClickEdit?: () => void;
}

function EditModal({
  depth,
  commentId,
  isModalOpen,
  onClickEdit,
}: EditModalProps) {
  const { editComment } = useComment(depth);
  const setCommentRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  const form = useRef<HTMLFormElement>(null);

  const currentComment = useRecoilValue(
    currentCommentSelector({ depth, commentId }),
  );

  const onClick = () => {
    const textarea = form.current?.children.namedItem(
      'comment',
    ) as HTMLTextAreaElement;

    editComment(commentId, textarea.value, textarea.value);

    textarea.value = '';
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
          onClick={() => {
            onClick();
            onClickEdit && onClickEdit();
          }}
        >
          수정
        </Button>,
      ]}
    >
      <form ref={form} className="comment__edit">
        <TextArea
          maxLength={1000}
          name="comment"
          defaultValue={currentComment.comment}
          className="form__textarea"
          style={{ marginTop: '10px', height: '120px', resize: 'none' }}
        />
      </form>
    </Modal>
  );
}

export default EditModal;
