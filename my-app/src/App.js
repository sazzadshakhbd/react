import "./App.css";
import Hello from "./myComponents/Hello";
import Welcome from "./myComponents/Welcome";
import MyButton from "./myComponents/MyButton";
import Arrow from "./myComponents/Arrow";
import State from "./myComponents/State";
import SetState from "./myComponents/SetState";
import Condition from "./myComponents/conditions";

function App() {
  return (
    <div className="App">
      <Hello name="Rachis" age="20" living="Dhaka"></Hello>
      <Welcome name="React"></Welcome>
      <MyButton></MyButton>
      <Arrow />
      <State></State>
      <SetState></SetState>
      <Condition />
    </div>
  );
}

export default App;
