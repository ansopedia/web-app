'use client';

import { useRouter } from 'next/navigation';
import SignUp from '../../../../components/auth/SignUp/SignUp';
import { Modal } from '../../../../components/ui';

const SignUpPage = () => {
  const router = useRouter();

  return (
    <Modal isOpen onClose={() => router.back()}>
      <SignUp />
    </Modal>
  );
};

export default SignUpPage;
