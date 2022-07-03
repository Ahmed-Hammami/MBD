import React from "react";
import "./Decouvrir.css";
import { Card } from "react-bootstrap";

const MoreDeets = () => {
 
  const cardInfo = [
    {
      image: "/img1.Png",
      title: "Stratégie d'entreprise",
      text: "Décider où aller, comprendre pourquoi vous devez y aller et savoir comment y aller",
      dec:"Découvrir",
    },
    {
        image: "/img2.Png",
        title: "Gouvernance",
        text: "Définir les rôles et responsabilités des décisionnaires à tous les niveaux afin d'assurer le bon fonctionnement de votre entreprise.",
        dec:"Découvrir",
      },
      {
        image: "/img3.Png",
        title: "Organisation",
        text: "Structurer l'organisation de manière à pouvoir affronter avec succès les défis que votre entreprise va rencontrer.",
        dec:"Découvrir",
      },
      {
        image: "/img4.Png",
        title: "Marketing & développement des affaires",
        text: "Construire et communiquer votre offre, en ciblant les bons marchés pour créer de la valeur à long terme.",
        dec:"Découvrir",
      },
      {
        image: "/img5.Png",
        title: "Digital",
        text: "Tirer parti des énormes opportunités d’optimisation offertes par les nouvelles technologies.",
        dec:"Découvrir",
      },
      {
        image: "/img6.Png",
        title: "Innovation  ",
        text: "Mettre en place une culture de l’innovation pour pouvoir évoluer continuellement.",
        dec:"Découvrir",
      },
      {
        image: "/img7.Png",
        title: "Expérience client",
        text: "Penser au-delà du produit ou du service pour offrir à vos clients une expérience pleinement satisfaisante à tout moment.",
        dec:"Découvrir",
      },
      
     
    
    
  ];

  const renderCard = (card, index) => {
    return (
        <>
        <div className="griditem">
            <img  className="cardimg" src={card.image} alt={index}></img>
      <div  className="carddiv">{card.title}</div>
      <p className="cardp">{card.text}</p>
      <h1 className="cardh1">{card.dec}
     <a href="/Decouvrir1"> <svg className="cardsvg" xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></a>
      </h1>
      </div>
      </>
    );
  };

  return <div  className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;