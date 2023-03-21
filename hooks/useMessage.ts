import { message } from 'antd';

const useMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (message: string) => {
    messageApi.open({
      type: 'success',
      content: message,
    });
  };

  const error = (message: string) => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  return { messageApi, contextHolder, success, error };
};

export default useMessage;
