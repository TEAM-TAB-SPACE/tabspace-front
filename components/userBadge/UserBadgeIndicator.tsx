import IndicatorIcon from './IndicatorIcon';

import IndicatorPopover from './IndicatorPopover';
import usePopover from '../../hooks/usePopover';

function UserBadgeIndicator({ commentId }: { commentId: number }) {
  const { isPopoverOpen, showPopover } = usePopover();

  return (
    <>
      <div className="userBadge__indicator">
        <button
          className="indicator__button"
          onClick={() => {
            showPopover();
          }}
        >
          <IndicatorIcon width="20px" height="20px" />
        </button>
        <IndicatorPopover
          className={isPopoverOpen ? 'indicator__popover_active' : ''}
        />
      </div>
      <style jsx global>{`
        .indicator {
          &__button {
            display: flex;
            border: none;
            background-color: transparent;
          }

          &__popover {
            display: none;
            position: absolute;
            top: -4px;
            right: 30px;
            width: 100px;
            padding: 7px 5px;
            text-align: center;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

            &_active {
              display: block;
            }

            .popover__item:not(:last-child) {
              margin-bottom: 5px;
            }
          }
        }
      `}</style>
    </>
  );
}

export default UserBadgeIndicator;
