import React from 'react';
import './App.css';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Details  from './components/Cards/Details';
import CreateRecipe from './components/Form/CreateRecipe';
import NavBar from './components/Navbar/NavBar';


function App() {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={NavBar}/>
        <Route exact path="/home" component={Home} />
        <Route  path="/details/:id"> <Details/> </Route>
        <Route  path="/create" component={CreateRecipe}/>
    </div>
  );
}

export default App;
