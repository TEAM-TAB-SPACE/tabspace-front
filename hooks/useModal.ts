import { useState } from 'react';

type UseModalHook = () => {
  isModalOpen: boolean;
  showModal: () => void;
  closeModal: () => void;
};

const useModal: UseModalHook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, showModal, closeModal };
};

export default useModal;
