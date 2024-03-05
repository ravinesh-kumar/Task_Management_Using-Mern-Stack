import React, { useState } from "react";
import './Style.css'
import { Link, useNavigate } from "react-router-dom";
function Login() {
   let navigate = useNavigate()
    const [data,setData]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:""
    })
  


    async function PostData(e){
        e.preventDefault();
        console.log();
        // return;
        let item = {}

          
          const form = document.getElementById("regform");
          const submitter = document.querySelector("#btn1");
          const formData = new FormData(form, submitter);

          for (const [key, value] of formData) {
            // console.log(key, value);
            item[key] = value;
          }
        //   console.log(item);
          
        //   return;
          let response = await fetch("http://localhost:8080/api/user/", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(item),
          });
          response = await response.json();
          console.log({...response});
          if (response.status === 200) {
            console.log({...item});
            navigate("/Login");
        }
          else {
            
           console.log("error occured");
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
              <form id="regform" onSubmit={PostData}>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="text"
                    name="Name"
                    // onChange={getInputData}
                    placeholder="Name"
                    required=""
                    
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="text"
                    name="username"
                    // onChange={getInputData}
                    placeholder="username"
                    required=""
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // onChange={getInputData}
                    required=""
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="text"
                    name="phone"
                    // onChange={getInputData}
                    placeholder="phone"
                    required=""
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope" />
                  </span>
                  <input
                    type="text"
                    name="password"
                    // onChange={getInputData}
                    placeholder="password"
                    required=""
                  />
                </div>
               
                <input
                    id="btn1"
                  className="button"
                  type="submit"
                  defaultValue="Register"
                />
              </form>
              <p>
                Else Login
              </p>
              <Link to={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Login;
