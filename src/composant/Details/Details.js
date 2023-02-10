import "./Details.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details({estConnecte, courriel}){

    const {id} = useParams();

    const [produit, setProduit] = useState({});
            //state is commentaire //function called to modify commentaires // use state is the tool we use 
    const [commentaires, setCommentaires] = useState([]);
    const [note, setNote] = useState([]);
    // const [note, setNote] = useState([{data:}]);
    // const [newCommentaires, addCommentaires] = useState();

    // this.setCommentaires = this.setCommentaires.bind(this);

    




    useEffect(()=>{

        fetch("//127.0.0.1:8000/webservice/php/biere/"+id)
            .then(data=>data.json())
            .then(data=>{

                setProduit(data.data);
                console.log(produit)
            })
        
        fetch("//127.0.0.1:8000/webservice/php/biere/"+id+"/commentaire")
        .then(data=>data.json())
        .then(data=>{

            setCommentaires(data.data);
        })

        fetch("//127.0.0.1:8000/webservice/php/biere/"+id+"/note")
        .then(data=>data.json())
        .then(data=>{

            setNote(data.data);
            console.log(note);
        })


        // let setCommentaire(){
        //     let commentaire = evt.target.value;
        //     console.log(commentaire);
    
        //     this.setState({
        //         courrielValide : valide,
        //         courriel : courriel,
        //         commentaire: commentaire
        //       });
        // }


    }, [])

    let message = "";
    if(estConnecte){
        message = <p>Connecté avec : {courriel}</p>

    }


    let formulaire = "";
    if(estConnecte){
        formulaire = 
        <form > 
            <label name="commentaire">laisser un commentaire</label>
            <input type="text" name="commentaire" placeholder="commentaire" value="" onChange={this.setCommentaire}></input>
        </form>
    }

    


    
    return (
        <>

        

        <section class="details">
            <h1>Details d'une bière</h1>
            <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <h1>commentaires</h1>
            <p>
                
                {commentaires.map(commentaires=>(

                <p>{commentaires.commentaire}</p>

                ))}

            </p>

            <h1>Notes</h1>
            <p>{note.note}</p>

        </section>
        
        <section class="details">
            {message}
            {formulaire}
        </section>

        </>

    );

    


}