'use client';

import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.module.scss';
import Button from '../Button/Button';

interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export type ModalHandle = {
  isOpen: () => boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement>();

  useEffect(() => {
    const root = document.getElementById('modal-root') || document.body;
    setModalRoot(root);
  }, []);

  if (!modalRoot) {
    return null;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const Modal = (
    <div className={style['modal-wrapper']}>
      <div className={style['modal-backdrop']} />
      <div className={style.modal}>
        {children}
        <Button
          variant="text"
          onClick={onClose}
          className={style['modal-close-btn']}
          autoFocus
          onKeyDown={handleKeyDown}
        >
          X
        </Button>
      </div>
    </div>
  );

  return isOpen ? createPortal(Modal, modalRoot) : null;
};

export default Modal;
