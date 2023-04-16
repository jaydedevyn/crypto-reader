import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import OrderReducer from "./order/order.slice";
import { socketMiddleware } from "./middleware/SocketMiddleware";
import Socket from "../utils/Socket";

const appReducer = {
  order: OrderReducer,
};

export const store = configureStore({
  reducer: appReducer,
  middleware: [socketMiddleware(new Socket())],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
