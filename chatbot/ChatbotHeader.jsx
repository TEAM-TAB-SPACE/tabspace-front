import variables from 'styles/variables.module.scss';

function ChatbotHeader() {
  return (
    <>
      <div className="chatbot__header">탭스페이스</div>
      <style jsx>{`
        .chatbot__header {
          padding: 10px 20px;
          font-weight: 600;
          font-size: 16px;
          color: ${variables.white};
          background: linear-gradient(
            90deg,
            rgba(157, 92, 255, 1) 0%,
            rgba(92, 130, 255, 1) 100%
          );
        }
      `}</style>
    </>
  );
}

export default ChatbotHeader;
