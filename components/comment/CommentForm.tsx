import { Input } from 'antd';
import { Button } from 'antd';
import variables from '../../styles/variables.module.scss';

const { TextArea } = Input;

function CommentForm() {
  return (
    <>
      <form className="comment__form">
        <TextArea
          maxLength={3000}
          className="form__textarea"
          style={{ marginTop: '20px', height: 120, resize: 'none' }}
          placeholder="함께하는 동료들과 의견을 나눠보세요."
        />
        <Button
          type="primary"
          className="form__submitButton"
          style={{ width: '100%', height: '40px', marginTop: '20px' }}
        >
          등록하기
        </Button>
      </form>
      <style jsx global>{`
        .comment__form .ant-input {
          &:focus,
          &:hover {
            border-color: ${variables.purpleLight};
          }
        }
      `}</style>
    </>
  );
}

export default CommentForm;
