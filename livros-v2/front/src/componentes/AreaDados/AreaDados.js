import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autores from '../Autores/Autores';

import './AreaDados.css';

export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/autores" component={Autores}></Route>


      </Switch>

    </div>
  );
}

