import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



import Header from './components/Header/Header';
import AllDistros from './components/AllDistros/AllDistros';
import About from './components/About/About';
import Auth from './components/Auth/Auth';
import Random from './components/Random/Random';

const App = () => {

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={AllDistros} />
        <Route path="/about" exact component={About} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/random" exact component={Random} />
      </Switch>

    </BrowserRouter>
  );
};

export default App;
