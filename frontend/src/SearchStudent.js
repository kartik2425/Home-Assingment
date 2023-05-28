import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchStudent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Create an object with the search data
    const searchData = {
      searchTerm: searchTerm,
    };

    // Send the search data to the backend
    axios
      .post("http://localhost:4500/student_list", searchData)
      .then((response) => {
        // Handle the response from the backend
        console.log("Response:", response.data);
        // Reset search term
        setData(response.data.list);
        setSearchTerm("");
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .post("http://localhost:4500/student_list")
      .then((response) => {
        // Handle the response from the backend
        console.log("Response:", response.data);
        // Set initial data
        setData(response.data.list);
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <style>{'body { background-color: cadetblue; }'}</style> 
      <h1 class="h1">Search Student</h1>
      <nav>
        <form onSubmit={handleSearch}>
          <input  class="home1"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button class="login-btn3" type="submit">Search</button>
        </form>
        <table>
          <thead>
            <tr class="h2">
              <th>User ID</th>
              <th>User Name</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter(
                (curr) =>
                  curr.id.includes(searchTerm) ||
                  curr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  curr.totalMarks.includes(searchTerm)
              )
              .map((curr) => (
                <tr key={curr.id}>
                  <td>{curr.id}</td>
                  <td>{curr.name}</td>
                  <td>{curr.totalMarks}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </nav>
    </>
  );
};

export default SearchStudent;
