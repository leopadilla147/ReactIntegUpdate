import { useState } from 'react';
import { FaEye, FaEyeSlash, FaUsers } from 'react-icons/fa';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OfficeHeadLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center m-5" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="text-center mb-4">
        <FaUsers size={67} style={{ color: '#8D0E0E' }} />
        <h1 className="mt-2">OFFICE HEAD</h1>
      </div>
      <Form onSubmit={handleLogin} className="bg-light p-4 rounded shadow" style={{ width: '100%', maxWidth: '450px', border: '1px solid #1d1d1d' }}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ marginLeft: '10px' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
            <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>
        </Form.Group>
        <Button as={Link} to='/Login/AdminLogin/OfficeHeadLoginPage/OfficeHeadDashboard' variant="dark" type="submit" className="w-100 mb-3 bg-color-2">Proceed</Button>
      </Form>
      <Button as={Link} to='/login/AdminLogin' variant="link" className="text-dark">Back</Button>
    </Container>
  );
};

export default OfficeHeadLoginPage;
