import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

const Protected = (props) => {
  let Cmp = props.Cmp;
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/register");
    }
  }, []);

  const history = useHistory();
  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
