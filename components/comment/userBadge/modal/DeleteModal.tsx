import { Button, Modal } from 'antd';
import { MouseEventHandler } from 'react';

interface DeleteModalProps {
  isModalOpen: boolean;
  onCancel: MouseEventHandler;
  onClickDelete?: () => void;
}

const DELETE_CONFIRM_MESSAGE = '댓글을 삭제하시겠습니까?';

function DeleteModal({
  isModalOpen,
  onCancel,
  onClickDelete,
}: DeleteModalProps) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={onCancel}
      style={{ top: '40%' }}
      width="280px"
      footer={[
        <Button key="submit" type="primary" onClick={onClickDelete}>
          삭제
        </Button>,
      ]}
    >
      <p>{DELETE_CONFIRM_MESSAGE}</p>
    </Modal>
  );
}

export default DeleteModal;
