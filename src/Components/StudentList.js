/* eslint-disable jsx-a11y/alt-text */
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function StudentList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    fetchData();
  }
  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Navbar />
      <br />
      <center>
        {" "}
        <h1>List of Student</h1>
        <br />
      </center>
      <div className="col-sm-8 offset-sm-2">
        <Table style={{ color: "#fff", backgroundColor: "black" }}>
          <tr style={{ color: "#A40E0F", backgroundColor: "black" }}>
            <td>
              <strong>ID</strong>
            </td>
            <td>
              <strong>NAME</strong>
            </td>
            <td>
              <strong>STUDENT ID</strong>
            </td>
            <td>
              <strong>COURSE NAME</strong>
            </td>
            <td>
              <strong>FACULTY</strong>
            </td>
            <td>
              <strong>IMAGE</strong>
            </td>
            <td>
              <strong>OPERATIONS</strong>
            </td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.student_id}</td>
              <td>{item.course_name}</td>
              <td>{item.faculty}</td>
              <td>
                <img
                  style={{ width: 100 }}
                  src={"http://127.0.0.1:8000/" + item.file_path}
                />
              </td>
              <td>
                <span
                  onClick={() => deleteOperation(item.id)}
                  className="delete"
                >
                  Delete
                </span>
                <Link to={"update/" + item.id}>
                  <span className="update">Update</span>
                </Link>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default StudentList;