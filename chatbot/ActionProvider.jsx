import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      '안녕하세요. 어떤 부분이 궁금하신가요?',
    );

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCurriculum = () => {
    const botMessage = createChatBotMessage(
      '탭스페이스는 온라인 교육 플랫폼으로, 프론트엔드 개발, 백엔드 개발, UI/UX 디자인 과정이 운영되고 있습니다.',
    );

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNational = () => {
    const botMessage = createChatBotMessage(
      '탭스페이스의 교육 과정은 국비교육과정입니다. 수강을 위해선 내일 배움카드를 발급 받으셔야 합니다',
    );

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCard = () => {
    const botMessage = createChatBotMessage(
      `내일배움카드 신청 방법은 HRD-Net에서 확인하실 수 있습니다.`,
    );

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleQna = () => {
    const botMessage = createChatBotMessage(
      '추가 문의는 010-0987-1234로 부탁드립니다.',
    );

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleCurriculum,
            handleNational,
            handleCard,
            handleQna,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
