
import React from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';
import imgHeader from'./img/slurm_banner.jpg';
import img2 from'./img/slurm2.webp';

export default class Accueil extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="details-accueil">
				<div className="contenu">
					<div className="details-accueil">

                        <img src={img2}></img>

                        
					</div>
				</div>
			</div>
        );
    }
}

