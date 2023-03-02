import React from 'react';
import { Link } from 'react-router-dom';
import Produit from '../Produit/Produit';
import './ListeProduit.css';
import slurm from "./img/slurm.png"

export default class ListeProduit extends React.Component{
  constructor(){
    super()

    this.state = {produits: [
      { id: 1,
        nom : "Produit 1",
        prix : 15.50
      },
      { id: 2,
        nom : "Produit 2",
        prix : 25.50
      },
      { id: 3,
        nom : "Produit 3",
        prix : 10.50
      },

    ], 
    messageErreur : "Test"}
  }

  //this is like use effect but for classes informs the app on the change of state
  componentDidMount(){
    fetch("http://127.0.0.1:8000/webservice/php/biere")
      .then(data=>data.json())
      .then(data=>{
        console.log(data);
        this.setState({
          produits : data.data
        })
      })
  }

  render(){

    let aProduits = this.state.produits.map((unProduit, index)=>{

      return ( 
        <Link key={unProduit.id_biere} to={"/produit/" + unProduit.id_biere}>
            <Produit estConnecte={this.props.estConnecte}  biere={unProduit}  /> 
          <div class="img-container">
            <img  src={slurm}></img>
          </div>
        </Link>
      );
    })


    
    if(aProduits.length <= 0){
      aProduits = <p>Aucun produit disponible</p>;
    }

    return (

      <>
      <h1 class="liste-title">Notre selection:</h1>
      <div className="liste">
        <section className='mesProduits'>

          {aProduits}
          
        </section>
      </div>
      </>
      
    );
  }
}


