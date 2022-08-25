import { BrowserRouter } from "react-router-dom";
import Routing from "./router/Routing";

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
