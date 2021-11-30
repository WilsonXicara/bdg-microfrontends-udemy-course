import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// No se implementa función mount() debido a que el container se renderizará de forma inmediata.
// Solo los remotes deben definir y exportar su función de renderizado porque se mostrarán según se decida en la programación
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
