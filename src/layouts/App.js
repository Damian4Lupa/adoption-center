import React from 'react';
// import '../styles/App.css';

import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation'
import Header from './Header'
import Footer from './Footer'

import HowWeHelp from '../pages/HowWeHelp'
import AdoptionInfo from '../pages/AdoptionInfo'
import Contact from '../pages/Contact'
import FindAPet from '../pages/FindAPet'
import GetInvolved from '../pages/GetInvolved'
import PetCareAndHealth from '../pages/PetCareAndHealth'

function App() {
  return (
    <Router>
      <HashRouter basename={"/"}>

        {/* <div className="site-container"> */}

          <Header />
          <Navigation />

          <Switch>
            <Route exact path="/" component={HowWeHelp} />
            <Route path="/AdoptionInfo" component={AdoptionInfo} />
            <Route path="/Contact" component={Contact} />
            <Route path="/FindAPet" component={FindAPet} />
            <Route path="/GetInvolved" component={GetInvolved} />
            <Route path="/PetCareAndHealth" component={PetCareAndHealth} />
            {/* <Route component={ErrorPage} /> */}
          </Switch>

          <Footer />
        {/* </div> */}



      </HashRouter>
    </Router>
  );
}

export default App;