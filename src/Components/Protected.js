/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

const Protected = (props) => {
  const history = useHistory();
  let Cmp = props.Cmp;
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/register");
    }
  }, []);

  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
