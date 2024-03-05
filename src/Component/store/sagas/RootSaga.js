import { all } from "redux-saga/effects";
import taskSagas from "./taskSaga";


export default function* RootSagas() {
    yield all([
        taskSagas(),

    ])
}