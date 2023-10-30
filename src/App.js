import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './sections/Navbar';
import Header from './sections/Header';
import Newarrivals from './sections/Newarrivals';
import Topselling from './sections/Topselling';
import Footer from './sections/Footer';
import Browse from './sections/Browse';
import Ads from './sections/Ads';
// import Animation from './sections/Animation';
import Happycustomer from './sections/Happycustomer';

function App() {
  return (
    <div className="App">
      <Ads/>
   <NavScrollExample/>
   <Header/>
   <Newarrivals/>
   <Topselling/>
   <Browse/>
   {/* <Animation/> */}
   <Happycustomer/>
   <Footer/>
    </div>
  );
}

export default App;
