import Navbar from "./Navbar";
import { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [course_name, setCourse_name] = useState("");
  const [file, setFile] = useState("");
  const [faculty, setFaculty] = useState("");

  async function addStudent() {
    console.warn(name, student_id, course_name, file, faculty);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("student_id", student_id);
    formData.append("course_name", course_name);
    formData.append("faculty", faculty);
    formData.append("file", file);

    let result = await fetch("http://127.0.0.1:8000/api/addstudent", {
      method: "POST",
      body: formData,
    });
    alert("Data saved  successfully!!!");
  }

  return (
    <div>
      <Navbar />
      <div className="col-sm-6 offset-sm-3">
        <center>
          <h1>AddStudent Page</h1>
        </center>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setStudent_id(e.target.value)}
          className="form-control"
          placeholder="Student id"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setCourse_name(e.target.value)}
          className="form-control"
          placeholder="Course name"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setFaculty(e.target.value)}
          className="form-control"
          placeholder="Faculty"
        />
        <br />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
          placeholder="File"
        />
        <br />
        <center>
          <button onClick={addStudent} className="btn btn-primary">
            Add Student
          </button>
        </center>
      </div>
    </div>
  );
}

export default AddStudent;
