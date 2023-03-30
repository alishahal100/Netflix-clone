import React from 'react';
import ReactDOM from 'react-dom/client';
import {Auth} from './components/firebase/config';
import App from './App'
import { FirebaseContext } from './components/context/context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{Auth}}>
      <App/>
    </FirebaseContext.Provider>
  </React.StrictMode>
);


