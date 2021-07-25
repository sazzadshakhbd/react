import Hello from "./mycomponents/Hello";
import Welcome from "./mycomponents/Welcome";
import Card from "./mycomponents/Card";

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Welcome></Welcome>
      <Card titleName="Sazzad" cardText="This is First paragraph"></Card>
      <Card titleName="Sobuz" cardText="This is Second paragraph"></Card>
      <Card titleName="Adib" cardText="This is Third paragraph"></Card>
    </div>
  );
}

export default App;
