
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route path="/items/:id" component={ItemDetail} />
      </Switch>
    </Router>
    </>
  )
}

export default App
