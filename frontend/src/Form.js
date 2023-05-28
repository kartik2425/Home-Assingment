import React, { useState } from "react";
import axios from "axios";
import "./Formdesign.css";

const Form = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      id: id,
      name: name,
      totalMarks: totalMarks,
    };

    // Send the form data to the backend
    axios
      .post("http://localhost:4500/form", formData)
      .then((response) => {
        // Handle the response from the backend
        alert("Response:", response.data);
        // Reset form fields
        setId("");
        setName("");
        setTotalMarks("");
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error("Error:", error);
      });
  };

  return (
    <>
     <style>{'body { background-color: cadetblue; }'}</style> 
      <form  class="box" onSubmit={handleSubmit}>
        <label class="home" htmlFor="id">User   ID :     </label>
        <input class="home1"
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br></br>
        <label class="home" htmlFor="name">User Name:</label>
        <input  class="home1"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label class="home" htmlFor="totalMarks">Total Marks:</label>
        <input  class="home1"
          type="text"
          id="totalMarks"
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
        />
        <br></br>

        <button class="login-btn1" type="submit">Submit</button>
      </form>
     
    </>
  );
};

export default Form;
