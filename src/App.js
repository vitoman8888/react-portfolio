import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

function App() {

  const [menuSelected, setMenuSelected] = useState('Contact');

  return (
    <div>
      <Header
          menuSelected={menuSelected}
          setMenuSelected={setMenuSelected}
        ></Header>
      <Main
          menuSelected={menuSelected}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
