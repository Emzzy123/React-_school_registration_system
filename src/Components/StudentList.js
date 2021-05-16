import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function StudentList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }, []);
  console.warn("result", data);
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
        <Table>
          <tr style={{ color: "#951b1e" }}>
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
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default StudentList;
