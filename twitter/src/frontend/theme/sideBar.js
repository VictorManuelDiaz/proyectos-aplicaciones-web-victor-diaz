import React from 'react';
import './sideBar.css';

const SideBar = () => {
    return(
    <section>
        <div className="right-bar">
            <div class="search">
                <input type="text" placeholder="Busca en Twitter" />
            </div>
            <div className="tendencies-card">
                <div className="tendencies-card-header">
                    <h5>Tendencias para tí</h5>
                </div>
                <div className="tendencies-card-content">
                    <div className="tendencies-card-content-item">
                        <p>Tendencia en Nicaragua</p>
                        <a href="http://localhost:3000/">Nicaragua</a>
                        <p>18,2 mil Tweets</p>
                    </div>
                    <div className="tendencies-card-content-item">
                        <p>Tendencia en Nicaragua</p>
                        <a href="http://localhost:3000/">Ropa</a>
                        <p>6,2 mil Tweets</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    )
}

export default SideBar;