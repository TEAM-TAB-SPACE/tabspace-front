function ChatMessage({ message, bot }) {
  const isBot = bot;

  return (
    <>
      <div className="chatbot__message" isBot={bot}>
        {message}
      </div>

      <style jsx>{`
        .chatbot__message {
          display: flex;
          justify-content: center;
          max-width: 85%;
          padding: ${isBot ? '0.8rem 1.2rem' : '0.7rem 1.1rem'};
          margin-left: 0.4rem;
          width: fit-content;
          color: ${isBot ? '#3d4f6e' : '#ffffff'};
          font-size: 0.97rem;
          line-height: 1.3rem;
          font-weight: ${isBot ? '500' : '400'};
          word-break: keep-all;
          background-color: ${isBot ? '#f2f2f2' : '#5c82ff'};
          border-radius: ${isBot ? '20px 20px 20px 5px' : '20px 20px 5px 20px'};
        }
      `}</style>
    </>
  );
}

export default ChatMessage;
