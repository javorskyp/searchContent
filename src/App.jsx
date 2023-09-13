import React from 'react';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar';
import Value from './components/Value';
import Search from './components/Search';

const App = () => {
  return (
  <div>
    <Navbar/>
    <Search/>
    <Jobs/>
    <Value/>
    <Footer/>
  </div>
  );
}
 
export default App;


