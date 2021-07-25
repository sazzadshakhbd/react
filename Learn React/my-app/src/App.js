import Hello from "./mycomponents/Hello";
import Welcome from "./mycomponents/Welcome";

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Welcome countryName="Bangladesh"></Welcome>
      <Welcome countryName="Australia"></Welcome>
      <Welcome countryName="Sweden"></Welcome>
    </div>
  );
}

export default App;
