import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaPaperPlane } from 'react-icons/fa';

const ActionButton = ({ cancelText = 'Reset', submitText = 'Submit' }) => {
  return (
    <>
      <Button type="reset" variant="danger">
        <FaTrash /> {cancelText}
      </Button>
      <Button type="submit" variant="success">
        <FaPaperPlane /> {submitText}
      </Button>
    </>
  );
};

export default ActionButton;
