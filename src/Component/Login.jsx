import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [data, setData] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function postData(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:8080/api/user/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    });
    response = await response.json();
    console.log({ ...response });
    if (response.status === 200) {
      localStorage.setItem("Login", true);
      let a = localStorage.getItem("Login", true);
      console.log(`localstorage`, a);
      navigate("/tasklist");
    }
  }

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
                    name="username"
                    placeholder="User Name"
                    className="form-control"
                    value={data.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={data.password}
                    onChange={handleChange}
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
