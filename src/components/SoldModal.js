import React from 'react';
import Modal from 'react-modal';

const customModalStyle = {
  content: {
    width: '60%', // Adjust the width as needed
    maxWidth: '400px', // Set a maximum width
    margin: 'auto', // Center the modal horizontally
    padding: '20px',
    maxHeight: '200px', // Add maximum height to limit the modal's height
    overflowY: 'auto', // Add scroll if content exceeds the height
  },
};

const SoldModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sold Modal"
      style={customModalStyle} // Apply the custom style
    >
      <h2>Product Sold</h2>
      <p>Congratulations, the product has been marked as sold!</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default SoldModal;
