import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { OrderInitState, OrderState } from "./order.state";

export const OrderSlice = createSlice({
  name: "order",
  initialState: OrderInitState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateOrderBook: (state: Draft<OrderState>, action: PayloadAction<any>) => {
      const { count, amount, price } = action.payload;

      if (count > 0) {
        if (amount > 0) {
          if (state.buyOrders[price]) {
            state.buyOrders[price].count += count;
            state.buyOrders[price].amount += amount;
          }
        } else {
          state.sellOrders[price] = {
            count,
            amount: amount * -1,
          };
        }
      } else {
        if (amount === 1) {
          delete state.buyOrders[price];
        } else if (amount === -1) {
          delete state.sellOrders[price];
        }
      }
    },
    connectSocket: (state, action) => {},
    connectSocketCompleted: (state, action) => {
      state.connected = true;
    },
    disconnectSocket: (state, action) => {
      state.connected = false;
    },
  },
});

export const {
  connectSocket,
  disconnectSocket,
  connectSocketCompleted,
  updateOrderBook,
} = OrderSlice.actions;

export default OrderSlice.reducer;
