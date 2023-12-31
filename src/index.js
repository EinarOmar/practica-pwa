import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { AuthProvider } from './context/AuthContext';
ReactDOM.render(
  <AuthProvider>
  <App />
</AuthProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
