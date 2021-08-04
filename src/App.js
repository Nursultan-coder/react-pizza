import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from "./components/";
import { Home, Cart } from "./pages/";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" component={Home} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
      </div>
    </div>
  );
}

export default App;