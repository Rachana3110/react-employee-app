import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./components/router/Routing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2 className="home-header">Employee Management Application</h2>
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
