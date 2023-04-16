import { connectSocketCompleted, updateOrderBook } from "../order/order.slice";

const BASE_URL = "wss://api-pub.bitfinex.com/ws/2";

export const socketMiddleware =
  (ws: any) => (params: any) => (next: any) => (action: any) => {
    const { dispatch } = params;
    const { type } = action;
    let channelId: number;

    const socket = new WebSocket(BASE_URL);

    switch (type) {
      case "order/connectSocket":
        socket.onopen = () => {
          const msg = JSON.stringify({
            event: "subscribe",
            channel: "book",
            symbol: "tBTCUSD",
            precision: "P0",
            freq: "F1",
            len: 25,
          });
          socket.send(msg);
          dispatch(connectSocketCompleted(1));
        };

        socket.onmessage = (event: any) => {
          const json = JSON.parse(event.data);
          try {
            if (json.event === "subscribed") {
              channelId = json.chanId;
            }
            if (channelId) {
              const [price, count, amount] = json[1];
              dispatch(
                updateOrderBook({
                  price,
                  count,
                  amount,
                })
              );
            }
          } catch (error) {
            console.log("error retrieving data", error);
          }
        };
        socket.onclose = () => {};
        break;

      case "socket/disconnect":
        // socket.disconnect();
        break;

      default:
        break;
    }

    return next(action);
  };
