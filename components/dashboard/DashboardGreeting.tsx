import { useRecoilValue } from 'recoil';

import { userAtom } from 'store/user';

function DashboardGreeting() {
  const { realname } = useRecoilValue(userAtom);

  return (
    <div>
      안녕하세요
      <br />
      {realname}님!
    </div>
  );
}

export default DashboardGreeting;
