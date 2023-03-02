import "./Details.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import slurm from "./img/slurm3.jpg"

export default function Details({estConnecte, courriel}){



    //are you reading the URL? yes you are!
    const {id} = useParams();


    //teammate situation
    const [produit, setProduit] = useState({});
            //state is commentaire //function called to modify commentaires // use state is the tool we use 
    const [commentaires, setCommentaires] = useState([]);

    // const [newCommentaires, setCommentaires] = useState([]);

    const [note, setNote] = useState([]);
    // const [note, setNote] = useState([{data:}]);
    // const [newCommentaires, addCommentaires] = useState();
    // this.setCommentaires = this.setCommentaires.bind(this);

    const [inputValue, setValue] = useState([]);
    const [inputValueNote, setValueNote] = useState([]);



    //====================================this is a hook========================================\\
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

    }, [])





    //====================================== commentaires ============================================\\


    //create an object from comments
    const creerCommentaires = (evt)=>{

        setValue({...inputValue, [evt.target.name]: evt.target.value, ["courriel"]: courriel });

    };


    //send object to database
    const envoiCommentaires = (evt) => {

        
        //prevents the refresh of the page
        evt.preventDefault();
        // //what does this mean? headers blah blah blah
        let entete = new Headers();
        entete.append("Content-Type", "application/json");
        //btoa binary to ascii are we even allowed in here?
        entete.append("Authorization", "Basic " + btoa("biero:biero"));

        console.log(inputValue);

        fetch('http://127.0.0.1:8000/webservice/php/biere/'+id+"/commentaire", {
            method:"PUT",
            body:JSON.stringify(inputValue),
            headers : entete

        })
            .then(response=>response.json())
            .then(data=>{
                
            })

            fetch("//127.0.0.1:8000/webservice/php/biere/"+id+"/commentaire")
                .then(data=>data.json())
                .then(data=>{

                setCommentaires(data.data);
            })

            
            console.log(inputValue);
    };


    //=================================== note ====================================================\\


    const creerNote = (evt)=>{

        console.log(evt)

        setValueNote({...inputValueNote, [evt.target.name]: evt.target.value, ["courriel"]: courriel });
        
        console.log(inputValueNote)
    };

    const envoiNote = (evt) => {

        
        //prevents the refresh of the page
        evt.preventDefault();
        // //what does this mean? headers blah blah blah
        let entete = new Headers();
        entete.append("Content-Type", "application/json");
        //btoa binary to ascii are we even allowed in here?
        entete.append("Authorization", "Basic " + btoa("biero:biero"));

        console.log(inputValueNote);

        fetch('http://127.0.0.1:8000/webservice/php/biere/'+id+"/note", {
            method:"PUT",
            body:JSON.stringify(inputValueNote),
            headers : entete

        })
            .then(response=>response.json())
            .then(data=>{

                fetch("//127.0.0.1:8000/webservice/php/biere/"+id+"/note")
                .then(data=>data.json())
                .then(data=>{
        
                    setNote(data.data);
                })
                console.log(data);
            })

            
            console.log(inputValueNote);
    };




    //=================================== gerer la connection ==========================================\\




    let message = "";
    if(estConnecte){
        message = <p>Connecté avec : {courriel}</p>

    }

    let formulaire = "";
    if(estConnecte){

        formulaire = 
        <form onSubmit = {envoiCommentaires} class="form-commentaire"> 
            <label for="commentaire">laisser un commentaire</label>
            <textarea   name="commentaire" onChange={creerCommentaires}></textarea>
            <button type='submit'>Envoyer</button>
        </form>
    }

    let formulaire_note = ""
    if(estConnecte){

        formulaire_note = 
        <form onSubmit = {envoiNote} class="form-note"> 

            <label for="note">Choisi un note</label>

            <select name="note" id="note"  onChange={creerNote}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select> 
            <button type='submit'>Envoyer</button>
        </form>
    }


    // ======================================= return ===================================================\\
    
    return (
        <>

        <section class="details">
            <h1>{produit.nom}</h1>
            <div class="details-info">
                <p>{produit.description}</p>
            </div>
            <h1>commentaires</h1>

            <p>
                
                {commentaires.map(commentaire=>(

                <div>
                <p>{commentaire.commentaire}</p>
                <small>- {commentaire.courriel}</small>
                </div>



                ))}

            </p>


            <h1>Note moyenne: {note.note}</h1>
            

        </section>
        
        <section class="details">
            {message}
            {formulaire}
            {formulaire_note}
        </section>

        </>

    );

    


}











