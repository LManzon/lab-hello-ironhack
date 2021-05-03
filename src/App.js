import logo from "./logo.svg";
import "./App.css";
import ironLogo from "./ironhack-logo.svg";
import menuTop from "./menu-top.svg";

function Navbar(props) {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
      }}
    >
      <img src={ironLogo} className="ironhack-logo" alt="ironhacklogo" />
      <img src={menuTop} className="menu-top" alt="menuTop" />
    </div>
  );
}

function TopBody(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#282c34",
        color: "white",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "0px 30px 50px",
      }}
    >
      <h1 style={{ fontSize: "100px", textAlign: "start" }}>
        Say hello to <br />
        ReactJS
      </h1>
      <p
        style={{
          textAlign: "start",
        }}
      >
        {" "}
        You will learn how to use <br /> the most popular frontend library,{" "}
        <br /> and become a super Ninja developer.
      </p>

      <button
        style={{
          width: "120px",
          height: "40px",
          fontSize: "15px",
          marginTop: "50px",
        }}
      >
        Awesome!
      </button>
    </div>
  );
}

function ButtonBody(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon1.png" />
        <h3> Declarative</h3>
        <p> React makes it painless to create interative Uls</p>
      </div>

      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon2.png" />
        <h3> Components</h3>
        <p> Build encapsulated components that manage their state</p>
      </div>

      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon3.png" />
        <h3> Single-Way</h3>
        <p> A set of immutable values are passed to the component's</p>
      </div>

      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src="../images/icon4.png" />
        <h3
          style={{
            textAlign: "start",
          }}
        >
          {" "}
          JSX
        </h3>
        <p
          style={{
            textAlign: "start",
          }}
        >
          {" "}
          Statically-typed designed to run on modern browsers
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBody />
      <ButtonBody />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
