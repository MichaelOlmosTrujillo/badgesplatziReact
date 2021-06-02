import React from 'react';

// Importando estilos
import './styles/Badge.css';

// Importación de imágenes
import confLogo from '../images/badge-header.svg';
class Badge extends React.Component{
    render(){
        // const firstName = "Michael";
        // const lastName = "OT"; 

        return <div className = "Badge">
                    <div className = "Badge__header">
                        <img src={confLogo} alt = "conference logo"/>
                    </div>

                    <div className = "Badge__section-name">
                        <img className = "Badge__avatar" src = {this.props.avatarUrl} alt = "Avatar"/>
                        <h1> {this.props.firstName} <br/> {this.props.lastName}</h1>
                    </div>

                    <div className="Badge__section-info">
                        <h3>{this.props.jobTitle}</h3>
                        <div>@{this.props.twitter}</div>
                    </div>
                    <div className = "Badge__footer">
                        #platzi conference
                    </div>
                </div>;    
    }
}

export default Badge;