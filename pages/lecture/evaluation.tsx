import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { cookieStringToObject } from '../../utils/cookie';
import { Input, Rate, Divider, Button } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import EvaluationResult from '../../components/lecture/evaluation/EvaluationResult';
import useFetch from '../../hooks/useFetch';
import useMediaQueryState from '../../hooks/useMediaQueryState';
import { API_URL_OTHER } from '../api/other';

const { TextArea } = Input;

const iconStyle = { fontSize: 35 };

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined style={{ ...iconStyle }} />,
  2: <FrownOutlined style={{ ...iconStyle }} />,
  3: <MehOutlined style={{ ...iconStyle }} />,
  4: <SmileOutlined style={{ ...iconStyle }} />,
  5: <SmileOutlined style={{ ...iconStyle }} />,
};

function Evaluation() {
  const fetch = useFetch();
  const { isMobile } = useMediaQueryState();
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSeccess] = useState(false);

  const onChageRate = (score: number) => setScore(score);

  const onSubmit = async (e: React.SyntheticEvent) => {
    const form = e.target as HTMLFormElement;
    const textarea = form.querySelector(
      '.form__textarea',
    ) as HTMLTextAreaElement;
    e.preventDefault();

    if (textarea.value.length < 10) return;

    const res = await fetch.post(API_URL_OTHER.LECTURE_EVALUATION, {
      score: score,
      comment: textarea.value,
    });

    setIsSubmitted(true);

    if (res instanceof Error) {
      setIsSeccess(false);
    } else {
      setIsSeccess(true);
    }

    textarea.value = '';
  };

  return (
    <>
      {isSubmitted ? (
        <EvaluationResult {...{ isSuccess, setIsSubmitted }} />
      ) : (
        <form className="lecture__evaluation" onSubmit={onSubmit}>
          <fieldset className="evaluation__field">
            <div className="evaluation__question">강의는 만족스러우셨나요?</div>
            <Rate
              defaultValue={0}
              onChange={onChageRate}
              character={props => {
                if (typeof props.index !== 'undefined')
                  return customIcons[props.index + 1];
              }}
            />
          </fieldset>
          <Divider />
          <fieldset className="evaluation__field">
            <label
              htmlFor="evaluation__comment"
              className="evaluation__question"
            >
              강의를 개선할 수 있게 의견을 알려주세요!
            </label>
            <TextArea
              id="evaluation__comment"
              maxLength={1000}
              name="comment"
              className="form__textarea"
              style={{ height: '120px', resize: 'none' }}
              placeholder="최소 10자 이상 적어주세요."
            ></TextArea>
          </fieldset>
          <Button
            htmlType="submit"
            type="primary"
            className="form__submitButton"
            style={{ width: '100%', height: '40px', marginTop: '20px' }}
          >
            제출하기
          </Button>
        </form>
      )}
      <style jsx global>{`
        .lecture__evaluation {
          margin: 80px 0;
          max-width: 1300px;
          padding: ${isMobile ? '0 16px' : '0 70px'};
          text-align: center;

          .evaluation__field {
            padding: 50px 0;
          }

          .evaluation__question {
            display: block;
            padding-bottom: 20px;
            font-size: 18px;
            font-weight: 500;
          }
        }
      `}</style>
    </>
  );
}

export default Evaluation;

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = cookieStringToObject(context.req?.headers?.cookie || '');

  if (!cookies.access) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
