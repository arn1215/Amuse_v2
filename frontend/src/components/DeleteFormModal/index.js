import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';


function DeleteFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="loginForm crud delete" onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteFormModal;