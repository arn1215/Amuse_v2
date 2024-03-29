import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';


function EditFormModal({id, song}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <FaEdit style={{cursor: "pointer"}} onClick={() => setShowModal(!showModal)} />
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <div className='close-modal'>
          <p style={{color:'white', cursor: 'pointer'}} onClick={() => setShowModal(!showModal)}>Close</p>
          <EditForm id={id} song={song} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;