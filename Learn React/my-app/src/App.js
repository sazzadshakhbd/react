import Hello from "./mycomponents/Hello";
import Welcome from "./mycomponents/Welcome";

function App() {
  return (
    <div className="App">
      <Hello colorName="Red" personName="Sazzad"></Hello>
      <Hello colorName="Blue" personName="Marjia"></Hello>
      <Hello colorName="White" personName="Adib"></Hello>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
