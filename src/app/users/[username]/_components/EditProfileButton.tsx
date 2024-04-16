'use client';

import EditIcon from '../../../../icons/EditIcon';
import Button from '../../../../components/ui/Button/Button';
import { useModal } from '../../../../components/ui/Modal/useModal';
import Modal from '../../../../components/ui/Modal/Modal';

const EditProfileButton = () => {
  const { closeModal, isOpen, openModal } = useModal();
  const handleEditProfileClick = () => {
    openModal();
  };

  return (
    <>
      <Button onClick={handleEditProfileClick} variant="icon">
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        Body
      </Modal>
    </>
  );
};

export default EditProfileButton;
