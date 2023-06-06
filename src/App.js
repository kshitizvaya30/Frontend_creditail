import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import PaymentOption from "./components/PaymentMode/PaymentOption";
import SuccessPage from "./components/PaymentSuccess/SuccessPage";
import AppContext from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<PaymentOption />} path="/payment_mode" />
          <Route element={<SuccessPage />} path="/success" />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
