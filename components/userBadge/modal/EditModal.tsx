import { Button, Modal, Input } from 'antd';

const { TextArea } = Input;

interface EditModalProps {
  isModalOpen: boolean;
  onClickEdit?: () => void;
}

const PLACEHOLDER = '함께하는 동료들과 의견을 나눠보세요.';

function EditModal({ isModalOpen, onClickEdit }: EditModalProps) {
  return (
    <Modal
      open={isModalOpen}
      title='수정하기'
      style={{ top: '40%' }}
      width="280px"
      footer={[
        <Button key="submit" type="primary" onClick={onClickEdit}>
          수정
        </Button>,
      ]}
    >
      <TextArea
        maxLength={1000}
        name="comment"
        className="form__textarea"
        style={{ marginTop: '10px', height: '120px', resize: 'none' }}
        placeholder={PLACEHOLDER}
      />
    </Modal>
  );
}

export default EditModal;
