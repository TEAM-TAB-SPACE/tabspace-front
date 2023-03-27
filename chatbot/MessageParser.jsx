import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = message => {
    if (message.includes('안녕')) {
      actions.handleHello();
    } else if (message.includes('교육과정') || message.includes('소개')) {
      actions.handleCurriculum();
    } else if (message.includes('국비')) {
      actions.handleNational();
    } else if (
      message.includes('내일배움카드') ||
      message.includes('카드신청') ||
      message.includes('카드 신청')
    ) {
      actions.handleCard();
    } else {
      actions.handleQna();
    }
  };

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
