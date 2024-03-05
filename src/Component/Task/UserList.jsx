import React, { useEffect, useState } from "react";

export default function UserList() {
  const [data, setData] = useState([]);

  async function getApiData() {
    try {
      let response = await fetch("http://localhost:8080/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    getApiData();
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1 className="bg-success mb-5 mt-4 text-center text-light">
        User Details
      </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Username</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            {/* <th scope="col">password</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              {/* <td>{item.password}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
