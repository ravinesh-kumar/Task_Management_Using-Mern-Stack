import { ADD_TASK, DELETE_TASK, GET_TASK, UPDATE_TASK } from "../Constant"
export function addTask(data) {
    return {
        type: ADD_TASK,
        
        payload: data
    }
}
export function getTask() {
    return {
        type: GET_TASK
    }
}
export function updateTask(data) {

    return {
        type: UPDATE_TASK,
        payload: data
    }
}
export function deleteTask(data) {
    return {
        type: DELETE_TASK,
        payload:data
    }
}