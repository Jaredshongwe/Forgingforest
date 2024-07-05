/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const MessageModal = ({ show, onHide, message }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000); // Modal will disappear after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body className="text-center">
      <img
            alt=''
            src='../Logo.png'
            width='70'
            height='70'
            className='my-2'
          />
        <h4 className='p-5 my-2'>{message}</h4>
      </Modal.Body>
    </Modal>
  );
};

export default MessageModal;
