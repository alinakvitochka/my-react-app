import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const StatelessCounterDisplay = ({ count }) => {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
    >
      <h2>Stateless Component</h2>
      <p>Current count: {count}</p>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div
        className="card"
        style={{ border: "1px solid #ddd", padding: "20px", margin: "20px 0" }}
      >
        <h2>Stateful Component</h2>
        <StatelessCounterDisplay count={count} />
        <button
          onClick={() => setCount(count + 1)}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Decrement
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
