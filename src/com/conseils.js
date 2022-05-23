import React, { Component } from 'react'
import "./Conseils.css";

export default class Conseils extends Component {
  render() {
    return (
      <><div className='conseils'>
            <div className='conseils1'>

                <h2>Des conseils, c’est bien. Accompagnés d’action, c’est mieux.</h2>

            </div>
            <div className='conseils2'>
                <h2>Vous cherchez des consultants qui ne se contentent pas de parler mais agissent concrètement ? C’est comme ça que nous travaillons.</h2>
                <br />
                <h2>Diagnostic</h2>
                <p> Pour prendre les bonnes décisions, il faut savoir où on en est. Nous vous offrons la vue d’ensemble que vous n’avez peut-être plus à force d’être submergé·e par les tâches quotidiennes.</p>
                <br />
                <h2>Recommandations</h2>
                <p>Nous avons occupé des postes-clés dans différentes industries, à différents niveaux et sur différents continents. C’est ce qui nous permet d'identifier le meilleur chemin et de vous accompagner vers le succès.</p>
                <br />
                <h2>Mise en œuvre</h2>
                <p> Le meilleur des plans ne servira à rien s’il dort dans un tiroir. C'est pourquoi nous nous assurons de vous proposer des solutions réalisables, adaptées à votre réalité. Et, nous pouvons vous guider dans leur mise en oeuvre.</p>
                <br />
                <h2>Suivi</h2>
                <p>Un projet terminé, ce n’est que le début d’une nouvelle étape. Nous vous accompagnons dans la durée pour évaluer la réussite des objectifs et faire les ajustements nécessaires..</p>
            </div>

        </div>
        <div> <center> <h1 className='conseilsh1'>Vous souhaitez en savoir plus sur notre cabinet ?</h1>
                <span className='conseilsspan'>À propos<svg className="cardsvg" xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg></span>
                </center>
                </div></>
    )
  }
}
