import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import IndicatorIcon from './IndicatorIcon';
import EditModal from './modal/EditModal';
import DeleteModal from './modal/DeleteModal';
import IndicatorPopover from './IndicatorPopover';
import usePopover from '../../hooks/usePopover';
import useModal from '../../hooks/useModal';
import useComment from '../../hooks/useComment';
import { commentRefetchKeyAtom } from '../../store/comment';

interface UserBadgeIndicatorProps {
  depth: 1 | 2;
  commentId: number;
}

function UserBadgeIndicator({ depth, commentId }: UserBadgeIndicatorProps) {
  const { isPopoverOpen, showPopover } = usePopover();
  const { isModalOpen, showModal, closeModal } = useModal();
  const [modalType, setModalType] = useState('');
  const setCommentRefetchKey = useSetRecoilState(commentRefetchKeyAtom);

  const { deleteComment } = useComment(depth);

  const onClickDelete = () => {
    deleteComment(commentId);
    closeModal();
    setCommentRefetchKey('stale');
  };

  const onPopoverItemClick = (type: 'edit' | 'delete') => () => {
    setModalType(type);
    showModal();
  };

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
          onItemClick={onPopoverItemClick}
          className={isPopoverOpen ? 'indicator__popover_active' : ''}
        />
        {modalType === 'edit' ? (
          <EditModal
            {...{ commentId, depth, isModalOpen, onClickEdit: closeModal }}
          />
        ) : (
          <DeleteModal {...{ isModalOpen, onClickDelete }} />
        )}
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
