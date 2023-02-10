import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Entete.css';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                  courrielValide : false,
                  courriel : ""
                }
    //this.connection = this.connection.bind(this)
    this.setCourriel = this.setCourriel.bind(this);
    this.seConnecter = this.seConnecter.bind(this);
  }

  setCourriel(evt){

    console.log(evt.target.value)
    let courriel= evt.target.value;
    let valide;
    if(courriel != ""){ // Valide un courriel non vide... à refaire genre avec un regexp... tsé...
      valide = true;
    }else{
      valide = false;
    }

    this.setState({
      courrielValide : valide,
      courriel : courriel
    })

  }

  seConnecter(){
    
    this.props.seConnecter(this.state.courriel)
  }
  render(){
    let btnConnecter = (this.props.estConnecte ? "Se déconnecter": "Se connecter")
    return (
      <header className="App-header">
        <nav>
            <div className="top-nav ">
              <div className="barre">
                <Link className="logo" to="/">

                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100pt" height="100pt" viewBox="0 0 510.000000 510.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,510.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2455 4866 c-43 -19 -102 -88 -115 -136 -22 -83 19 -188 91 -228 34
-20 34 -15 14 -203 -9 -79 -31 -290 -50 -469 -19 -179 -40 -371 -46 -428 l-12
-102 -51 -30 c-47 -27 -153 -127 -201 -191 -13 -17 -47 -35 -100 -54 -372
-131 -642 -451 -755 -895 -40 -156 -50 -270 -50 -582 l0 -296 -72 -22 c-299
-91 -492 -305 -537 -597 -21 -138 -24 -312 -7 -414 25 -151 23 -149 101 -149
36 0 65 2 65 5 0 3 -10 40 -22 82 -20 67 -23 102 -23 253 0 139 4 187 18 235
51 172 129 284 256 368 123 81 260 127 436 148 59 7 459 9 1175 6 968 -3 1094
-5 1168 -20 151 -31 236 -57 332 -104 169 -82 285 -224 336 -413 11 -42 19
-118 22 -217 4 -136 2 -159 -19 -228 -12 -41 -26 -78 -31 -81 -4 -3 -8 -12 -8
-20 0 -12 12 -14 62 -12 l62 3 18 59 c43 142 42 367 -2 530 -67 244 -238 424
-497 521 l-88 33 -6 344 c-5 289 -10 359 -27 444 -39 193 -73 296 -145 438
-141 278 -367 477 -659 581 -70 25 -83 34 -135 94 -31 36 -82 88 -113 114
l-55 48 -31 252 c-18 139 -46 358 -63 487 -17 129 -38 285 -46 345 l-14 110
45 39 c59 51 77 88 78 161 0 86 -46 160 -121 191 -41 18 -139 17 -178 0z m190
-86 c56 -52 53 -145 -6 -194 -61 -52 -133 -43 -190 22 -28 31 -31 41 -26 80 5
49 31 90 68 110 38 20 124 10 154 -18z m-61 -318 c3 -5 19 -163 36 -353 16
-189 32 -362 35 -384 8 -69 35 -359 35 -377 0 -15 -5 -15 -57 -1 -41 10 -78
13 -125 8 -79 -7 -73 -23 -58 150 20 241 29 354 35 440 3 50 10 140 15 200 5
61 12 155 16 210 3 55 8 103 11 108 6 10 51 9 57 -1z m33 -1220 c32 -10 76
-30 98 -44 44 -28 110 -86 104 -92 -2 -2 -69 0 -149 4 -80 4 -208 4 -285 0
-77 -4 -141 -7 -142 -6 -1 1 9 15 22 32 50 65 169 123 252 124 22 0 67 -8 100
-18z m105 -232 c599 -69 978 -457 1100 -1125 15 -85 21 -172 25 -379 l6 -269
-24 6 c-127 31 -169 32 -1363 32 l-1198 0 5 305 c5 319 11 374 65 565 138 496
495 807 989 865 100 11 296 11 395 0z"/>
<path d="M2765 4420 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"/>
<path d="M2205 3380 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"/>
<path d="M1038 1370 c-16 -29 -16 -30 2 -30 16 0 20 7 20 30 0 17 -1 30 -2 30
-2 0 -11 -14 -20 -30z"/>
<path d="M4046 1325 c-3 -9 1 -18 10 -22 21 -8 25 -1 9 20 -11 15 -13 16 -19
2z"/>
<path d="M2445 1030 c-594 -4 -1091 -10 -1105 -15 -14 -4 -47 -14 -75 -22
-175 -52 -335 -176 -396 -308 -28 -59 -33 -82 -37 -171 -7 -155 21 -310 75
-411 l18 -33 158 0 c87 0 157 3 155 8 -47 92 -69 155 -82 233 -19 112 -20 150
-1 253 26 146 114 278 233 349 70 42 109 46 449 48 l242 1 178 -137 c98 -75
184 -140 192 -144 33 -19 40 -196 15 -355 -14 -86 -35 -159 -69 -239 -7 -16 6
-17 184 -17 105 0 191 2 191 5 0 2 -13 26 -28 52 -78 133 -120 320 -106 471 8
85 -19 60 269 257 l181 123 276 12 276 12 53 -35 c111 -72 201 -191 242 -322
18 -57 22 -93 21 -195 0 -139 -14 -203 -67 -304 -18 -34 -33 -64 -35 -68 -2
-5 79 -8 180 -8 l183 0 23 35 c13 19 36 62 50 97 25 58 27 73 26 198 -1 117
-5 146 -27 216 -71 215 -248 364 -482 403 -102 17 -244 18 -1360 11z"/>
<path d="M1567 534 c-4 -4 -7 -63 -7 -131 l0 -124 133 3 132 3 0 125 0 125
-126 3 c-69 1 -128 -1 -132 -4z"/>
<path d="M3284 527 c-2 -7 -3 -65 -2 -128 l3 -114 133 -3 132 -3 0 131 0 130
-130 0 c-99 0 -132 -3 -136 -13z"/>
</g>
                  </svg>

                  <div>

                  </div>

                </Link>

                <p className="menu-mobile"></p>
              </div>

              <div className="barre">
                
                  <NavLink to="/produit">Les produits</NavLink>
              
              </div>
              <section class="search-bar">
                <p>Courriel : <input disabled={this.props.estConnecte} type="email" onChange={this.setCourriel}></input></p>
                <button disabled={!this.state.courrielValide} onClick={this.seConnecter}>{btnConnecter}</button>
              </section>
            </div>
          </nav>
        </header>
    );
  }
}


