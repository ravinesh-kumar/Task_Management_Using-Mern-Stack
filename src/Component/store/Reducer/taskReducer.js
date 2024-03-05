import { ADD_TASK_RED, DELETE_TASK_RED, GET_TASK_RED, UPDATE_TASK_RED } from "../Constant";

export function TaskReducer(state = [], action) {
    let newState, index;
    switch (action.type) {
        case ADD_TASK_RED:

            newState = state.push(action.payload);

            return newState;

        case GET_TASK_RED:
            return action.payload;

        case UPDATE_TASK_RED:

            newState = state;
            index = state.findIndex((x) => x._id === action.payload._id);
            newState[index].title = action.payload.title;
            newState[index].description = action.payload.description;
            newState[index].duedate = action.payload.duedate;

            return newState;


        case DELETE_TASK_RED:
            newState = state;
            index = state.find((x) => x._id === action.payload._id);
            newState.splice(index, 1);
            return newState;

        default:
            return state;
    }
}