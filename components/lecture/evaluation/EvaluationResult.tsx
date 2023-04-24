import { Dispatch, SetStateAction } from 'react';

import { Button, Result } from 'antd';

import { useRouter } from 'next/router';

import { EVALUATION_RESULT_MESSAGE } from 'constant/messages';

interface EvaluationResultProps {
  isSuccess: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

function EvaluationResult({
  isSuccess,
  setIsSubmitted,
}: EvaluationResultProps) {
  const router = useRouter();
  console.log(isSuccess);
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
          title={EVALUATION_RESULT_MESSAGE.success}
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
          title={EVALUATION_RESULT_MESSAGE.error}
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
