interface DashboardGreeting {
  username: string;
}

function DashboardGreeting({ username }: DashboardGreeting) {
  return (
    <div>
      안녕하세요
      <br />
      {username}님!
    </div>
  );
}

export default DashboardGreeting;
