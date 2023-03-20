import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom'
import Home from './containers/Home';
import Links from './containers/Links';
import Contact from './containers/Contact';
import Login from './containers/Login';
import Matches from './containers/Matches';
import RequireAuth from './components/RequireAuth';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase/firebase-config';

function App() {

  initializeApp(getFirebaseConfig());

  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="links" element={<Links />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} /> 
        <Route path="matches" element={
          <RequireAuth> 
            <Matches /> 
          </RequireAuth> }
        />
        <Route path="*" element={<Home />} />    
      </Route>
    </Routes>
  );
}

export default App;
