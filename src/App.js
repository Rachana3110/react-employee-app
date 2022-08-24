// import "./App.css";
import useToken from "./helpers/useToken";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {!token ? (
            <>
              <Route path="/" index element={<Login setToken={setToken} />} />
              <Route path="/registration" element={<Registration />} />
            </>
          ) : (
            <Route path="/home" element={<Home setToken={setToken}/>} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
