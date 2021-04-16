import logo from "./logo.svg";
import "./App.css";
import Hello from "./mycomponents/Hello";
import Welcome from "./mycomponents/Welcome";

function App() {
  return (
    <div className="App">
      <Hello name="Saleh" age="20" living="Dhaka"></Hello>
      <Hello name="Yousuf" age="25" living="Faridpur"></Hello>
      <Hello name="Younus" age="30" living="Rajbari"></Hello>
      <Hello name="Ibrahim" age="40" living="Kustia"></Hello>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
