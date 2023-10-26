import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";

function PostUser() {
  //   const [users, setUsers] = useState([]);
  const [userObj, setUserObj] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    imageUrl: "",
  });
  const [btn, setBtn] = useState("Save");

  const url = "http://localhost:3000/api/customers"; // Replace with your API URL

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // Cls
  function cls() {
    setUserObj({ _id: "", name: "", mobile: "", email: "", imageUrl: "" });
    setBtn("Save");
  }

  // Handle Change Event
  function handleChange(e) {
    setUserObj({ ...userObj, [e.target.name]: e.target.value });
  }

  // handleSubmit event
  function handleSubmit(e) {
    e.preventDefault();

    postUser();

    cls();
  }

  //post users
  async function postUser() {
    try {
      const { data } = await axios.post(url + "/add", {
        name: userObj.name,
        mobile: userObj.mobile,
        email: userObj.email,
        imageUrl: userObj.imageUrl,
      });
      console.log("Saved Data", data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="form-container container my-5 rounded">
      <div>
        <h1>Register User Details</h1>
        <form className="mt-3 p-3" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control"
            value={userObj.name}
          />
          <input
            onChange={handleChange}
            type="text"
            name="mobile"
            placeholder="Enter mobile number"
            className="form-control my-2"
            value={userObj.mobile}
          />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter your email"
            className="form-control my-2"
            value={userObj.email}
          />
          <input
            onChange={handleChange}
            type="text"
            name="imageUrl"
            placeholder="Enter image url"
            className="form-control ny-2"
            value={userObj.imageUrl}
          />
          <input
            onChange={handleChange}
            type="submit"
            value={btn}
            className="btn btn-primary my-3"
          />
        </form>

        {/* <Profile/> */}
      </div>
    </div>
  );
}

export default PostUser;