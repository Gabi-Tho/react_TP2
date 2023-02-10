import React from 'react';
import { Link } from 'react-router-dom';
import Produit from '../Produit/Produit';
import './ListeProduit.css';

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

    // creating a table that contains all the product information
    // what does map do?
    let aProduits = this.state.produits.map((unProduit, index)=>{
      //console.log(unProduit, index)
      // Choisir sa façon, pas les deux...}
        //<Produit nom={unProduit.nom} id={unProduit.id_biere} description={unProduit.description} />
      return ( 
        <Link key={unProduit.id_biere} to={"/produit/" + unProduit.id_biere}>
            <Produit estConnecte={this.props.estConnecte}  biere={unProduit} {...unProduit} /> 
        </Link>
      );
    })



    console.log(aProduits)
    
    if(aProduits.length <= 0){
      aProduits = <p>Aucun produit disponible</p>;
    }

    return (

      <>
      <h1 class="liste-title">Notre selection:</h1>
      <div className="liste">
        {/* <p>Compteur : {this.props.compteur}</p> */}
        {/*}<p>{this.state.messageErreur}</p>{*/}
        <section className='mesProduits'>

          
          {aProduits}
          {/*}{(aProduits.length ? aProduits : "Aucun produit disponible")}{*/}
          
        </section>
      </div>
      </>
      
    );
  }
}


