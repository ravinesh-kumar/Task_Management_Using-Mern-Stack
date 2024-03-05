import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask, getTask } from "../store/actions/taskActions";

export default function AddTask() {
  let [data, setData] = useState({
    title: "",
    description: "",
    duedate: "",
  });
  const TaskStateData = useSelector((state) => state.TaskStateData);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  function getInputData(e) {
    let { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function postData(e) {
    e.preventDefault();
    // console.log({...data.title})
    dispatch(addTask({ title: data.title, description: data.description, duedate:data.duedate }));
    navigate("/tasklist");
  }

  function getApiData() {
    dispatch(getTask());
    if (TaskStateData.length) setData(TaskStateData);
  }
  useEffect(() => {
    getApiData();
  }, [TaskStateData.length]);
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={postData}>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="text"
                    name="title"
                    onChange={getInputData}
                    placeholder="title"
                    className="form-control"
                    value={data.title}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="text"
                    name="description"
                    onChange={getInputData}
                    placeholder="description"
                    className="form-control"
                    
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="date"
                    name="duedate"
                    onChange={getInputData}
                    placeholder="duedate"
                    className="form-control"
                    value={data.duedate}
                    
                  />
                </div>

                <input
                  id="btn1"
                  className="button"
                  type="submit"
                  defaultValue="Register"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   let [data, setData] = useState({
//     username: "",
//     password: "",
//   });
//   // let [show, setShow] = useState(false)
//   let navigate = useNavigate();

//   async function postData(e) {
//     e.preventDefault();
//     console.log(e.target.value);
//     let response = await fetch("http://localhost:8080/api/user/login", {
//       method: "post",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         username: data.username,
//         password: data.password,
//       }),
//     });
//     response = await response.json();
//     console.log({...response});
//     if (response.status === 200) {
//       navigate("/home");
//     }
//   }
//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Document</title>
//       <div className="form_wrapper">
//         <div className="form_container">
//           <div className="title_container">
//             <h2>Responsive Registration Form</h2>
//           </div>
//           <div className="row clearfix">
//             <div className="">
//               <form onSubmit={postData}>
//                 <div className="input_field">
//                   {" "}
//                   <span>
//                     <i aria-hidden="true" className="fa fa-envelope" />
//                   </span>
//                   <input
//                     type="text"
//                     name="username"
//                     placeholder="User Name"
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="input_field">
//                   {" "}
//                   <span>
//                     <i aria-hidden="true" className="fa fa-envelope" />
//                   </span>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="form-control"
//                   />
//                 </div>
//                 {/* {Name: 'demo15', username: 'demo15', email: 'demo15@gmail.com', phone: '1542641', password: 'Demo@015'} */}
//                 <input
//                   id="btn1"
//                   className="button"
//                   type="submit"
//                   defaultValue="Register"
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
