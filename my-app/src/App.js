import logo from "./logo.svg";
import "./App.css";
import Hello from "./mycomponents/Hello";
import Welcome from "./mycomponents/Welcome";
import MyButton from "./mycomponents/MyButton";
import Arrow from "./mycomponents/Arrow";

function App() {
  return (
    <div className="App">
      <Hello name="Saleh" age="20" living="Dhaka"></Hello>
      <Welcome name="React"></Welcome>
      <MyButton></MyButton>
      <Arrow />
    </div>
  );
}

export default App;
