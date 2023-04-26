import { Dispatch, SetStateAction } from 'react';

import { Button, Result } from 'antd';

import { useRouter } from 'next/router';

import { EVALUATION_RESULT_MESSAGES } from 'constants/messages';
import { INTERNAL } from 'constants/urls';

interface EvaluationResultProps {
  isSuccess: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

function EvaluationResult({
  isSuccess,
  setIsSubmitted,
}: EvaluationResultProps) {
  const router = useRouter();

  const handleMoveToDashboardButtonClick = () => {
    router.push(INTERNAL.dashboard);
  };

  const handleAgainButtonClick = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {isSuccess ? (
        <Result
          status="success"
          title={EVALUATION_RESULT_MESSAGES.success}
          style={{ padding: '300px 0' }}
          extra={[
            <Button
              type="primary"
              key="dashboard"
              onClick={handleMoveToDashboardButtonClick}
            >
              대시보드로 이등
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="error"
          title={EVALUATION_RESULT_MESSAGES.error}
          style={{ padding: '300px 0' }}
          extra={[
            <Button
              type="primary"
              key="evaluation"
              onClick={handleAgainButtonClick}
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
