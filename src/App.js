import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/scss/main.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import CarDetail from './components/CarDetail';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalogo" component={Catalogue} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/vehiculo/:id" component={CarDetail} />
        </Switch>
        <Footer />
      </Router>

    </React.Fragment>
  );

}

export default App;
