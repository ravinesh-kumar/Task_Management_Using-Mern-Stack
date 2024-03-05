import { takeEvery, put } from "redux-saga/effects";
import { addTask, deleteTask, getTask, updateTask } from "./services/TaskApi";
import { ADD_TASK, ADD_TASK_RED, DELETE_TASK, DELETE_TASK_RED, GET_TASK, GET_TASK_RED, UPDATE_TASK, UPDATE_TASK_RED } from "../Constant";


function* addTaskdetail(action) {

    let response = yield addTask(action.payload);

    yield put({ type: ADD_TASK_RED, payload: response.data });
}

function* getTaskDetail() {

    let response = yield getTask();
    yield put({ type: GET_TASK_RED, payload: response.data });
}

function* updateTaskDetails(action) {
    let response = yield updateTask(action.payload);
    console.log(`from product update saga`, { ...response });
    yield put({ type: UPDATE_TASK_RED, payload: response.data });
}

function* DeleteTaskDetail(action) {

    yield deleteTask(action.payload);
    yield put({ type: DELETE_TASK_RED, payload: action.payload });
}

export default function* ProductSagas() {

    yield takeEvery(ADD_TASK, addTaskdetail);
    yield takeEvery(GET_TASK, getTaskDetail);
    yield takeEvery(UPDATE_TASK, updateTaskDetails);
    yield takeEvery(DELETE_TASK, DeleteTaskDetail);
}