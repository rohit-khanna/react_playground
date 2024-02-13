import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
      <li>
          <Link to="/without-memo">Without Memo </Link>
        </li>
        <li>
          <Link to="/memo-composition">Memo Composition</Link>
        </li>
        <li>
          <Link to="/memo-alone">Memo Alone</Link>
        </li>
        <li>
          <Link to="/query-test">Query Test</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
