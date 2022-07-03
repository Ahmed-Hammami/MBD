import React, { useState } from 'react'
import './About.css'
import {Card} from 'react-bootstrap';
export default function About() {
const [show0,Setshow0]=useState(false);


  const equipe = [
    {
      image: "/img100.jpeg",
      Job: "Expert en Stratégie & Organisation",
      name: "Elvis Gonzalez",
     
    },
    {
      image: "/img101.jpg",
      Job: "Excellence Center Manager & Responsable RH",
      name: "Vanesa Perez",
     
    },
    {
      image: "/img102.jpg",
      Job: "Expert en Développement des affaires & Gouvernance",
      name: "Gilbert Bieri",
     
    }
    ,
    {
      image: "/104.jpeg",
      Job: "Experte en Marketing & Communication",
      name: "Sophie Schell",
     
    },
    {
      image: "/222.jpg",
      Job: "Digital Marketing Officer",
      name: "Gabriel Scheder",
     
    },
    {
      image: "/333.jpg",
      Job: "Market Analyst",
      name: "Susana Mendes",
     
    }
  ]
const renderCard=(card,index)=>{
  return <>
  <div className="gitem"  onMouseEnter={()=>{ Setshow0(true)}} onMouseLeave={()=>{ Setshow0(false)}} >
  
   <span>{card.name}</span> 
  <div>{card.Job}</div>
  {show0?(<>
    <div className='notreequipesvg'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
</svg></div>
    </>):null

    }
  <img src={card.image} alt={index}></img>
  


  </div>
  
  </>
}

  return (
    <>
    <div  className='g'>
    
    <h1 className='nostalents'>Nos talents </h1>
<div className="g1" >


  {equipe.map(renderCard)}
 

  </div>
  </div>
</>
    
  )
}
