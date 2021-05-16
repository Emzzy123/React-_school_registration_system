import Navbar from "./Navbar";
import { useState } from "react";
import { Table } from "react-bootstrap";

function SearchStudent() {
  const [data, setData] = useState([]);
  async function search(key) {
    console.warn(key);
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json();
    console.warn(result);
    setData(result);
  }
  return (
    <div>
      <Navbar />
      <div className="col-sm-6 offset-sm-3">
        <center>
          <br />
          <h1>Search Student</h1>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Search Student Name"
            onChange={(e) => search(e.target.value)}
          />
          <br />
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
        </center>
      </div>
    </div>
  );
}

export default SearchStudent;
