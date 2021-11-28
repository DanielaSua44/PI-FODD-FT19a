import React from 'react';
import './App.css';
import Home from './components/Home';
import {Route,Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Details  from './components/Cards/Details';
import CreateRecipe from './components/Form/CreateRecipe'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route  path="/details/:id"> <Details/> </Route>
        <Route  path="/create" component={CreateRecipe}/>
      </Switch>
    </div>
  );
}

export default App;
