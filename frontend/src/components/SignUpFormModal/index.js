import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignUpForm';


function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="sign-up-button" onClick={() => setShowModal(true)}>Create Account</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;