import React from 'react';
import {Link} from 'react-router-dom';
// Importando estilos
import './styles/Navbar.css';
// Importando estilos de bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// Importando el logo
import logo from '../images/logo.svg';


class Navbar extends React.Component{
    render(){
        return( 
        <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to= "/">
                    <img className="Navbar_brand-logo" src={logo} alt="Logo"/>
                    <span className="fw-light">Platzi</span>
                    <span className="fw-bold">Conf</span>
                </Link>
            </div>
        </div>
        );
    }
}

export default Navbar;