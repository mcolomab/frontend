import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import WebApp from './components/Webapp'

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={WebApp} />
      </Switch>
    </>
  );
}

export default App;
