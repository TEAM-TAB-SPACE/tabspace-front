import { MouseEventHandler } from 'react';

import { Button, Modal } from 'antd';

import { DELETE_CONFIRM_MESSAGE } from 'constants/messages';

interface DeleteModalProps {
  isModalOpen: boolean;
  onCancel: MouseEventHandler;
  onClickDelete?: () => void;
}

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
