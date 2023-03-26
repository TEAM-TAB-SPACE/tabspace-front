import { createChatBotMessage } from 'react-chatbot-kit';
import ChatbotHeader from './ChatbotHeader';
import ChatMessage from './ChatMessage';

const config = {
  initialMessages: [
    createChatBotMessage(`궁금한 점은 탭스페이스에 문의해보세요.`),
  ],
  botName: 'TabTab',
  customComponents: {
    header: () => <ChatbotHeader />,
    botAvatar: props => <div {...props} />,
    botChatMessage: props => <ChatMessage {...props} bot />,
    userAvatar: props => <div {...props} />,
    userChatMessage: props => <ChatMessage {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: `#722ed1`,
    },
  },
};

export default config;
