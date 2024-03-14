import React from "react";
import { useNavigate } from "react-router-dom";

const FormTable: React.FC = () => {
    const navigate = useNavigate();


  return (
    <>
      <h1>Form Table</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default FormTable;