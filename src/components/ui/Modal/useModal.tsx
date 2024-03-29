import { useRef } from 'react';
import { ModalHandle } from './Modal';

export const useModal = () => {
  const modalRef = useRef<ModalHandle>(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  return {
    modalRef,
    openModal,
  };
};
