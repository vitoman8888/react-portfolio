import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer'

function App() {

  const [menuSelected, setMenuSelected] = useState('About Me');

  return (
    <div>
      <Header
          menuSelected={menuSelected}
          setMenuSelected={setMenuSelected}
        ></Header>
      <Project
          menuSelected={menuSelected}
      ></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
