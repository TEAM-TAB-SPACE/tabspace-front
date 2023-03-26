import { Button, Result } from 'antd';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

interface EvaluationResultProps {
  isSuccess: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

function EvaluationResult({
  isSuccess,
  setIsSubmitted,
}: EvaluationResultProps) {
  const router = useRouter();

  const onClickDashboardButton = () => {
    router.push('/dashboard');
  };

  const onClickAgainButton = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {isSuccess ? (
        <Result
          status="success"
          title="소중한 의견 감사합니다!"
          style={{ padding: '300px 0' }}
          extra={[
            <Button
              type="primary"
              key="dashboard"
              onClick={onClickDashboardButton}
            >
              대시보드로 이등
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="error"
          title="제출에 실패했습니다. 다시 시도해 주세요."
          style={{ padding: '300px 0' }}
          extra={[
            <Button
              type="primary"
              key="evaluation"
              onClick={onClickAgainButton}
            >
              다시 제출하기
            </Button>,
          ]}
        />
      )}
    </>
  );
}

export default EvaluationResult;
