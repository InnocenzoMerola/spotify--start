import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Player />
    </div>
  );
}

export default App;
