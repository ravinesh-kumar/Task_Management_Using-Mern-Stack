import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTask, getTask } from "../store/actions/taskActions";

const TaskList = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const TaskStateData = useSelector((state) => state.TaskStateData);
  const navigate = useNavigate();
  function updatedata(_id) {
    // updatetask
    navigate("updatetask/" + _id);
  }
  function deleteData(_id) {
    dispatch(deleteTask({ _id: _id }));
    getApiData();
  }
  function getApiData() {
    dispatch(getTask());
    if (TaskStateData.length) {
      setData(TaskStateData);
    }
  }
  function btnTask() {
    navigate("/taskadd");
  }
  useEffect(() => {
    getApiData();
  }, [TaskStateData.length]);
  return (
    <>
      <div className="align-content-center align-items-center d-flex justify-content-center mb-3 mt-3 ">
        <button
          className="bg-success w-75 form-control text-center text-light  p-2"
          onClick={btnTask}
        >
          Add Task
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">title</th>
            <th scope="col">description</th>
            <th scope="col">due date</th>
            <th scope="col">Update</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            // console.log(item.duedate);
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.duedate}</td>
                <td>
                  {/* <Link to={`/api/task/${item._id}`}><i className="fa fa-edit text-success">Update</i></Link> */}
                  <Link to={`/api/task/${item._id}`}>
                    <i className="fa fa-edit text-success">Update</i>
                  </Link>
                  {/* <button onClick={()=>updatedata(item._id)}><i className="fa fa-edit text-success">Update</i></button> */}
                </td>
                <td>
                  <button className="btn" onClick={() => deleteData(item._id)}>
                    <i className="fa fa-trash text-danger">Delete</i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
