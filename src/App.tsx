import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Messages from './pages/Messages';
import Profils from './pages/Profils';

import './styles/index.css';
import './fa/css/all.css';
import Connexion from './pages/Connexion';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/messages/" component={Messages}/>
          <Route path="/profils/" component={Profils}/>
          <Route path="/connexion/" component={Connexion}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;