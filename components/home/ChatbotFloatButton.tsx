import Chatbot from 'react-chatbot-kit';
import MessageParser from 'chatbot/MessageParser';
import ActionProvider from 'chatbot/ActionProvider';
import config from 'chatbot/config';

import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

function ChatbotFloatButton() {
  return (
    <FloatButton.Group
      type="primary"
      trigger="click"
      icon={<QuestionCircleOutlined />}
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </FloatButton.Group>
  );
}

export default ChatbotFloatButton;
