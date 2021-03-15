import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./component/Title";
import Gallery from "./component/Gallery";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Gallery />
    </div>
  );
};

export default App;
