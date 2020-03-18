import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


function App() {
  const HatsPage = () => (
    <div>
      <h1> Hats Page</h1>
    </div>
  )
  return (
    <div>
    <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='hats' component={HatsPage} />
    </Switch>
     <HomePage />
    </div>
  );
}

export default App;
