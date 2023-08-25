import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import Travel from './components/Travel';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './components/travel.css';

function App() {
  return (
    <div className="App">
      {/* <Travel /> */}
      <Navbar />
      <Home />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
