import "./App.css";
import Navigation from "./myComponents/Navigation";
import Myroute from "./myComponents/Myroute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Myroute />
      </BrowserRouter>
    </div>
  );
}

export default App;
