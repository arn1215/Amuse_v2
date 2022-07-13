import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditComment from './EditComment';


function EditCommentModal({id}) {
  const [showCommentModal, setCommentShowModal] = useState(false);
  
  return (
    <>
      <button className="commentButton edit1" onClick={() => setCommentShowModal(true)}>Edit</button>
      {showCommentModal && (
        <Modal onClose={() => setCommentShowModal(false)}>
          <EditComment setCommentShowModal={setCommentShowModal} id={id}/>
        </Modal>
      )}
    </>
  );
}

export default EditCommentModal;