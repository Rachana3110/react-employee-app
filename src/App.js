import { BrowserRouter } from "react-router-dom";
import './App.css'
import Routing from "./components/router/Routing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing/>
      </div>
    </BrowserRouter>
  );
}

export default App;
