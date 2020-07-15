import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  MemoryRouter
} from 'react-router-dom';

import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import Icons from 'uikit/dist/js/uikit-icons';

import Presentation from './Views/Presentation/Presentation';
import Experience from './Views/Experience/Experience';
import Contacts from './Views/Contacts/Contacts';
import PageNotFound from './Views/PageNotFound/PageNotFound';

import Navbar from './Views/Navbar/Navbar';
import Footer from './Views/Footer/Footer';

import './App.css';
import UnderDevelopment from './Views/UnderDevelopment/UnderDevelopment';

UIkit.use(Icons);

export default function App() {
  return (
    <MemoryRouter>
      <Navbar />
      {true ? (
        <UnderDevelopment />
      ) : (
        <Switch>
          <Route exact path="/" component={Presentation} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/experience" component={Experience} />
          <Route component={PageNotFound} />
        </Switch>
      )}
      <Footer />
    </MemoryRouter>
  );
}
