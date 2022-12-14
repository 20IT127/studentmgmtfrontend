import React, { useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import axios from "axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  let getStudents = () => {
    axios
      .get("http://localhost:8080/listStudents")
      .then((response) => setStudents(response.data))
      .catch((error) => alert(error));
  };
  return (
    <div className="my-3">
      <Container>
        <Card.Header>
          <h3>Students List</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Student Address</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={3}>{students.length} Studnets Available!!!</td>
                </tr>
              ) : (
                students.map((student)=>
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.address}</td>
                </tr>
                )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Container>
    </div>
  );
}
