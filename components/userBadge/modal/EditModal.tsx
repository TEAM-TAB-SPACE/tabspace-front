import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Button, Modal, Input } from 'antd';
import useFetch from '../../../hooks/useFetch';
import {
  currentCommentSelector,
  commentRefetchKeyAtom,
} from '../../../store/comment';
import { API_URL_LECTURE } from '../../../pages/api/lecture';
import { useRef } from 'react';

const { TextArea } = Input;

interface EditModalProps {
  depth: 1 | 2;
  commentId: number;
  isModalOpen: boolean;
  onClickEdit?: () => void;
}

const PLACEHOLDER = '수정할 내용을 입력해주세요.';

function EditModal({
  depth,
  commentId,
  isModalOpen,
  onClickEdit,
}: EditModalProps) {
  const fetch = useFetch();
  const setCommentRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  const currentComment = useRecoilValue(
    currentCommentSelector({ depth, commentId }),
  );

  const form = useRef<HTMLFormElement>(null);

  const url =
    depth === 1
      ? API_URL_LECTURE.COMMENTS_DEPTH1
      : API_URL_LECTURE.COMMENTS_DEPTH2;

  const onClick = () => {
    const textarea = form.current?.children.namedItem(
      'comment',
    ) as HTMLTextAreaElement;

    fetch.put(url, {
      id: commentId,
      comment: textarea.value,
      reply: textarea.value,
    });

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
          placeholder={PLACEHOLDER}
        />
      </form>
    </Modal>
  );
}

export default EditModal;
