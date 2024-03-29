'use client';

import { FC, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.module.scss';

interface ModalProps extends React.ComponentPropsWithoutRef<'dialog'> {
  children: React.ReactNode;
  ref?: React.LegacyRef<ModalHandle>;
}

export type ModalHandle = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const Modal: FC<ModalProps> = forwardRef<ModalHandle, ModalProps>(function Modal({ children }: ModalProps, ref) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => modalRef.current?.showModal(),
      close: () => modalRef.current?.close(),
      toggle: () => {
        modalRef.current?.open ? modalRef.current?.close() : modalRef.current?.showModal();
      },
      isOpen: modalRef.current?.open ?? false,
    };
  });

  const modalRoot = document.getElementById('modal-root') || document.body;

  return createPortal(
    <dialog ref={modalRef} className={style.modal}>
      {children}
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>,
    modalRoot,
  );
});

export default Modal;
