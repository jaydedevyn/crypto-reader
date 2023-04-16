export interface OrderState {
  buyOrders: {
    [price: number]: {
      count: number;
      amount: number;
    };
  };
  sellOrders: {
    [price: number]: {
      count: number;
      amount: number;
    };
  };
  connected: boolean;
}

export const OrderInitState: any = {
  buyOrders: {},
  sellOrders: {},
  connected: false,
};
