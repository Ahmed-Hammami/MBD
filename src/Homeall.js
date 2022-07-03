import React from 'react'
import Home1 from './com/Home1';
import MoreDeets from './com/Decouvrir';
import Conseils from './com/conseils';
import Pub from './com/Pub';
import Contact from './com/Contact';
import Client from './com/Client';
export default function Homeall() {
  return (
    <div>
      <Home1/>
     <MoreDeets/>
     <Pub/>
     <Conseils/>
     <Client/>
     <Contact/>
    </div>
  )
}
