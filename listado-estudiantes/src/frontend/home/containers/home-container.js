import React, { Component } from 'react';
import Home from '../components/home';

class HomeContainer extends Component {

    constructor(props) {
        super(props);

        const data = [
            {
                image: require('./../../../assets/male.png'),
                name: 'Víctor Manuel',
                lastName: 'Díaz Suárez',
                idNumber: 16084480,
            },
            {
                image: require('./../../../assets/female.png'),
                name: 'Rosa María',
                lastName: 'López',
                idNumber: 16098967,
            },
            {
                image: require('./../../../assets/male.png'),
                name: 'Luis',
                lastName: 'Báez',
                idNumber: 16093434,
            },
            {
                image: require('./../../../assets/female.png'),
                name: 'Norma',
                lastName: 'Estrada',
                idNumber: 16084459,
            },
            {
                image: require('./../../../assets/male.png'),
                name: 'Luis',
                lastName: 'González',
                idNumber: 16084481,
            },
            {
                image: require('./../../../assets/female.png'),
                name: 'Ana',
                lastName: 'Báez',
                idNumber: 12343456,
            },
            {
                image: require('./../../../assets/male.png'),
                name: 'Roberto',
                lastName: 'Morales',
                idNumber: 16084482,
            },
            {
                image: require('./../../../assets/female.png'),
                name: 'Susana',
                lastName: 'López',
                idNumber: 16084483,
            },
            {
                image: require('./../../../assets/male.png'),
                name: 'Iván',
                lastName: 'Rocha',
                idNumber: 16084488,
            },
            {
                image: require('./../../../assets/female.png'),
                name: 'Lisa',
                lastName: 'Morales',
                idNumber: 16084489,
            },
            {
                image: require('./../../../assets/male.png'),
                name: 'Mario',
                lastName: 'Vargas',
                idNumber: 16084490,
            },
            {
                image: require('./../../../assets/female.png'),
                name: 'Josefa',
                lastName: 'Valencia',
                idNumber: 16084492,
            },
        ];

        this.state = {
            data: data,
            selected: null
        };
    }

    ChangeSelected = (value) => {
        this.setState({selected: value});
    }

    render() {

        const { data, selected } = this.state;

        return (
            <Home
                selected={selected}
                students={data}
                select={this.ChangeSelected}
            />
        );

    }

}

export default HomeContainer;