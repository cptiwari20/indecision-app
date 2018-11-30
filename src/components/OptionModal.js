import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selection Modal"
    onRequestClose={props.closeModal}
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal--title">You should do: </h3>
    <h1 className="modal--option">{props.selectedOption}</h1>
    <button className="button" onClick={props.closeModal}>Okay</button>
  </Modal>
)
export default OptionModal;