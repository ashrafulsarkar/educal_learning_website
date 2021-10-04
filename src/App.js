import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
		<Header></Header>
      <Switch>
        <Route exact path="/">
			<Home></Home>
        </Route>
        <Route path="/home">
			<Home></Home>
        </Route>
        <Route path="/about">
			<About></About>
        </Route>
        <Route path="/services">
			<Services></Services>
        </Route>
        <Route path="/contact">
			<Contact></Contact>
        </Route>
        <Route path="*">
			<NotFound></NotFound>
        </Route>
      </Switch>
	  <Footer></Footer>
    </Router>
  );
}

export default App;
