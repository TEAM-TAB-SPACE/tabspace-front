import IndicatorIcon from './IndicatorIcon';

interface UserBadgeIndicatorProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function UserBadgeIndicator({ onClick }: UserBadgeIndicatorProps) {
  return (
    <>
      <button className="indicator" type="button" onClick={onClick}>
        <IndicatorIcon width="20px" height="20px" />
      </button>
      <style jsx>
        {`
          .indicator {
            width: 20px;
            height: 20px;
            background-color: transparent;
            border: none;
          }
        `}
      </style>
    </>
  );
}

export default UserBadgeIndicator;
