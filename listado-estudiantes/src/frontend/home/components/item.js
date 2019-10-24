import React from 'react';
import './item.css';

const Item = (props) => {

    const { data, selected, select } = props;
    
    if (selected===data.idNumber)
    return (
        <div id='selected' className='item' onClick={()=> select(data.idNumber)}>
            <div>
                <img
                    src={data.image}
                />
                <p>
                    <b>Carné:</b> {data.idNumber}
                </p>
                <p>
                    <b>Nombre:</b> {data.name}
                </p>
                <p>
                    <b>Apellidos:</b> {data.lastName}
                </p>
            </div>
        </div>
    );
    else
    return (
        <div className='item' onClick={()=> select(data.idNumber)}>
            <div>
                <img
                    src={data.image}
                />
                <p>
                    <b>Carné:</b> {data.idNumber}
                </p>
                <p>
                    <b>Nombre:</b> {data.name}
                </p>
                <p>
                    <b>Apellidos:</b> {data.lastName}
                </p>
            </div>
        </div>
    );

};

export default Item;