import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Counter from "./components/counter";
import Login from "./modules/login";

const Home = () => <div>HOME</div>;

function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Counter path="/counter" />
    </Router>
  );
}

export default App;
