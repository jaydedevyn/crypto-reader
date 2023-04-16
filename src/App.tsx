import React from "react";
import "./App.scss";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import { useDispatch } from "react-redux";
import { connectSocket } from "./redux/order/order.slice";

function App() {
  const dispatch = useDispatch();
  dispatch(connectSocket(1));
  return (
    <div>
      <CryptoTable></CryptoTable>
    </div>
  );
}

export default App;
