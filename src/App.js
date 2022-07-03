import React from 'react';
import './App.css';
import Bar from './com/bar';
import Home1 from './com/Home1';
import Footer from './com/Footer';
import MoreDeets from './com/Decouvrir';
  import Conseils from './com/conseils';
import Bar1 from './com/bar1';
import Pub from './com/Pub';
import Contact from './com/Contact';
import Client from './com/Client';
import {Routes,Route} from 'react-router-dom'
import Decouvrir1 from './com/Decouvrir1';
import About from './com/About';
import Homeall from './Homeall';
import Contactall from './Contactall';
import Footer1 from './com/Footer1';
function App() {



  return (
    <div >
      <Bar1/>
     <Routes>
       <Route path='/' element={<Homeall/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contactall' element={<Contactall/>}/>

     </Routes>

     <Footer1/>
     
   
    
    </div>
  );
}

export default App;
