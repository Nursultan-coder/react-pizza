import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from "./components/";
import { Home, Cart } from "./pages/";

function App() {

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