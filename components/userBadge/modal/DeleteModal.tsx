import { Button, Modal } from 'antd';

interface DeleteModalProps {
  isModalOpen: boolean;
  onClickDelete?: () => void;
}

const DELETE_CONFIRM_MESSAGE = '댓글을 삭제하시겠습니까?';

function DeleteModal({ isModalOpen, onClickDelete }: DeleteModalProps) {
  return (
    <Modal
      open={isModalOpen}
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
