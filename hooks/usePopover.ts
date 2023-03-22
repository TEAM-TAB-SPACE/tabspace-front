import { useEffect, useState } from 'react';

type UsePopoverHook = () => {
  isPopoverOpen: boolean;
  showPopover: () => void;
  closePopover: () => void;
};

const usePopover: UsePopoverHook = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const onClickBodyHandler = (e: MouseEvent): any => {
      const body = e.target as HTMLBodyElement;

      if (!body.closest('.indicator__button')) {
        closePopover();
      }
    };

    document.addEventListener('click', onClickBodyHandler);
    return document.body.removeEventListener('click', onClickBodyHandler);
  }, []);

  const showPopover = () => {
    setIsPopoverOpen(true);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  return { isPopoverOpen, showPopover, closePopover };
};

export default usePopover;
