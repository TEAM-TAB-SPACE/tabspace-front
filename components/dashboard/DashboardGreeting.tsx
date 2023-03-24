import { useEffect, useState } from 'react';

function DashboardGreeting() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(localStorage.getItem('realname') || '');
  }, []);

  return (
    <div>
      안녕하세요
      <br />
      {userName}님!
    </div>
  );
}

export default DashboardGreeting;
