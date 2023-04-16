import layout from '../../../styles/layout.module.scss';

interface UserBadgeTextProps {
  userName: string;
  elapsedTime?: string | null;
}

function UserBadgeText({ userName, elapsedTime }: UserBadgeTextProps) {
  return (
    <>
      <div className="wrapper">
        <div className="name">{userName}</div>
        <div className={layout.flex_center}>
          <div className="info">{elapsedTime}</div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: 'row';
        }

        .name {
          display: 'inline-block';
          color: #111;
          margin-right: 7px;
          font-size: 12px;
          font-weight: 500;
        }

        .info {
          color: #767676;
          font-size: 12px;
        }
      `}</style>
    </>
  );
}

export default UserBadgeText;
