/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "./Navbar";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateStudent(props) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch(
      "http://127.0.0.1:8000/api/student/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
  });

  return (
    <div>
      <Navbar />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <center>
          <h1>Update Student Information</h1>
          <br />
          <input
            type="text"
            defaultValue={data.name}
            className="form-control"
          />
          <br />
          <br />
          <input
            type="text"
            defaultValue={data.student_id}
            className="form-control"
          />
          <br />
          <br />
          <input
            type="text"
            defaultValue={data.course_name}
            className="form-control"
          />
          <br />
          <br />
          <input
            type="text"
            defaultValue={data.faculty}
            className="form-control"
          />
          <br />
          <br />
          <input
            type="file"
            defaultValue={data.file_path}
            className="form-control"
          />
          <br />
          <br />
          <img
            style={{ width: 100 }}
            src={"http://127.0.0.1:8000/" + data.file_path}
          />
          <br />
          <br />
          <button type="button" class="btn btn-success">
            Update Student
          </button>
        </center>
      </div>
    </div>
  );
}

export default withRouter(UpdateStudent);
