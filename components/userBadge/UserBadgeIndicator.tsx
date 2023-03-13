import IndicatorIcon from './IndicatorIcon';
import { Popover, Space } from 'antd';

const content = (
  <>
    <button className="indicator__item">수정하기</button>
    <button className="indicator__item">삭제하기</button>
  </>
);

function UserBadgeIndicator() {
  return (
    <>
      <Space className="userBadge__indicator" wrap>
        <Popover placement="left" content={content} trigger="focus">
          <button className="indicator__button">
            <IndicatorIcon width="20px" height="20px" />
          </button>
        </Popover>
      </Space>
      <style jsx global>{`
        .indicator__button,
        .indicator__item {
          display: flex;
          border: none;
          background-color: transparent;
        }

        .indicator__item {
          padding: 7px;
        }
      `}</style>
    </>
  );
}

export default UserBadgeIndicator;
