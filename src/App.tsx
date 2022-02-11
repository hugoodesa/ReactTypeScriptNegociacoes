import "./App.css";
import NegociationComponent from "./Components/NegociationComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Working with Typescript : </h4>
        <NegociationComponent />
      </header>
    </div>
  );
}

export default App;

/* createServer({
  routes() {
    this.namespace = "api";

    this.get("/movies", () => {
      return [{ id: 1, name: "Inception", year: 2010 }];
    });
  },
}); */

/* <div className="App">
      <header className="App-header">
        <Bank />
      </header>
    </div> */
