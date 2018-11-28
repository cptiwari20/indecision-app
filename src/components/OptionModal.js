import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selection Modal"
    onRequestClose={props.closeModal}
    >
  <h3>You should do: </h3>
  <h1>{props.selectedOption}</h1>
  <button onClick={props.closeModal}>Okay</button>
  </Modal>
)
export default OptionModal;