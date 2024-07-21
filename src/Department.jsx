// src/Department.jsx
import { useState } from 'react';
import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';


const Department = () => {
  const [departments, setDepartments] = useState([
    'Institute of Fisheries and Marine Science (IFMS)',
    'College of Education (COED)',
    'College of Computing and Multimedia Studies (CCMS)',
    'College of Arts and Sciences (CAS)',
    'College Of Business and Public Administration (CBPA)',
    'College of Trade and Technology (COTT)',
    'College of Agriculture and Natural Resources (CANR)',
    'Entienza Campus (EZ)'
  ]);
  const [newDepartment, setNewDepartment] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddDepartment = () => {
    if (newDepartment && newDescription) {
      setDepartments([...departments, `${newDepartment} (${newDescription})`]);
      setNewDepartment('');
      setNewDescription('');
    }
  };

  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col md={4}>
          <div>
            <h3>Add Department</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Department"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </Form.Group>
              <Button variant="danger" onClick={handleAddDepartment}>Add</Button>
            </Form>
          </div>
          
        </Col>
        <Col md={8}>
          <div>
            <h3>Added Department</h3>
            <ListGroup>
              {departments.map((dept, index) => (
                <ListGroup.Item key={index}>{dept}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Department;
