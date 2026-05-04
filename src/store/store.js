import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  process.env.NODE_EV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
