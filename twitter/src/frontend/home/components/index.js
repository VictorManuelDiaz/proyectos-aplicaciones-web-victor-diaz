import React from 'react';
import './index.css';
import Layout from './../../theme/layout';
import Header from './../../theme/header';
import Vegetables from './../../../assets/vegetables.jpg';
import CNN from './../../../assets/cnn.png';
import Billie from './../../../assets/billie.jpg';
import MTV from './../../../assets/MTV.png';

const Index = () => {
    return(
        <>
            <Header><div className="title-content">Inicio</div></Header>
            <Layout>
                <div className="content">
                    <div className="tweet">
                        <div className="tweet-author">
                            <img className="img-author" src={CNN}/>
                            <h5>
                                CNN en Español
                            </h5>
                        </div>
                        <div className="tweet-content">
                            <p>
                                Para evitar la depresión, menos alimentos procesados y más frutas, verduras y pescado
                            </p>
                            <img src={Vegetables}/>
                        </div>
                    </div>
                    <div className="tweet">
                        <div className="tweet-author">
                            <img className="img-author" src={MTV}/>
                            <h5>
                                MTV
                            </h5>
                        </div>
                        <div className="tweet-content">
                            <p>
                                Help, I'm hypnotized by @billieeilish!! 💚
                            </p>
                            <img src={Billie}/>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Index;
