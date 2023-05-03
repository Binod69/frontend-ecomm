import Form from 'react-bootstrap/Form';

export const PasswordInputComponent = ({
  type = 'password',
  label = 'password',
  placeholder = 'Enter Your Password',
  name = 'password',
  changeEvent,
  error = null,
}) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          size="md"
          required={true}
          placeholder={placeholder}
          onChange={changeEvent}
        />
        <span className="text-danger">{error}</span>
      </Form.Group>
    </>
  );
};
