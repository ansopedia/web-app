'use client';

import { useRouter } from 'next/navigation';
import Login from '../../../../components/auth/Login/Login';
import Modal from '../../../../components/ui/Modal/Modal';

const LoginPage = () => {
  const router = useRouter();

  return (
    <Modal isOpen onClose={() => router.back()}>
      <Login />
    </Modal>
  );
};

export default LoginPage;
