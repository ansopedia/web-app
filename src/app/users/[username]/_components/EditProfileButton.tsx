'use client';

import EditIcon from '../../../../icons/EditIcon';
import { Button, Modal } from '../../../../components/ui';
import { useModal } from '../../../../hooks/useModal';

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
