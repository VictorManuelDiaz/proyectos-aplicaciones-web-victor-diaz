import React from 'react';
import './sideMenu.css';
import imgTwitter from './../../assets/twitter.png'

const SideMenu = () => {
    return(
    <section className="slide-menu">
        <img className="twitter-icon" src={imgTwitter}/>
        <nav >
            <ul className="menu"> 
                <li id="active" className="menu-option">Inicio</li>
                <li className="menu-option">Explorar</li>
                <li className="menu-option">Notificaciones</li>
                <li className="menu-option">Mensajes</li>
                <li className="menu-option">Guardados</li>
                <li className="menu-option">Listas</li>
                <li className="menu-option">Perfil</li>
                <li className="menu-option">Más opciones</li>
                <li className="menu-option"><button>TWITTEAR</button></li>
            </ul>
        </nav>
    </section>
    )
}

export default SideMenu;