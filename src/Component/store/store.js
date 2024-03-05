import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware  from "redux-saga"

import RootSagas from "../store/sagas/RootSaga"
import RootReducer from "../store/Reducer/RootReducer"


const sagaMiddleware = createSagaMiddleware()


const Store = configureStore({
    reducer: RootReducer,
    middleware: () => [sagaMiddleware]
})
export default Store

sagaMiddleware.run(RootSagas)