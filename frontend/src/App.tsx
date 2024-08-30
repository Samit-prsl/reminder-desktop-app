import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
