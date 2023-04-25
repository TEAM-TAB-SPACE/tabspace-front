import { MouseEventHandler, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Button, Modal, Input } from 'antd';

import useComment from 'hooks/useComment';

import { currentCommentSelector, commentRefetchKeyAtom } from 'store/comment';

const { TextArea } = Input;

interface EditModalProps {
  depth: 1 | 2;
  onCancel: MouseEventHandler;
  commentId: number;
  isModalOpen: boolean;
  onClickEdit?: () => void;
}

function EditModal({
  depth,
  onCancel,
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

  const handleEditButtonClick = () => {
    const textarea = form.current?.children.namedItem(
      'comment',
    ) as HTMLTextAreaElement;

    editComment(commentId, textarea.value, textarea.value);

    textarea.value = '';
    setCommentRefetchKey(() => 'stale');
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={onCancel}
      title="댓글 수정"
      style={{ top: '40%' }}
      width="280px"
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            handleEditButtonClick();
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
