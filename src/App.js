import { BrowserRouter } from "react-router-dom";
import "./App.css";
import useToken from "./helpers/useToken";
import RouterComponent from "./router/RouterComponent";
import RegistrationRouter from "./router/LoginRouter";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <RegistrationRouter setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h2>Employee App</h2>
        <RouterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
