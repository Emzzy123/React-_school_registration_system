<<<<<<< HEAD
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function SignUp() {
    //convert to object
    let item = { name, password, email };
    console.warn(item);
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Student Registration Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <button onClick={SignUp} className="btn btn-primary">
        Sign up
      </button>
    </div>
  );
};

export default Register;
=======
const Register = () => {
  return (
    <div className="register">
      <h1>Registration Page</h1>
    </div>
  );
};

export default Register;
>>>>>>> 89e0aeaa6695aab9cdc5626d1ed71fc47114e712
