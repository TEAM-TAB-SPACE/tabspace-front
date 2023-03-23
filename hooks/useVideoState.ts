import { useState } from 'react';

const useVideoState = () => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const startTimer = () => {
    setStartTime(() => new Date().getTime());
  };

  const stopTimer = () => {
    setEndTime(() => new Date().getTime());
  };

  const resetTimer = () => {
    setStartTime(() => 0);
    setEndTime(() => 0);
  };

  return {
    playTime: Math.floor(((endTime - startTime) / 1000) % 60),
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useVideoState;
