import React from 'react';
import List from './list';

const Home = (props) => {

    const { students, selected, select } = props;

    return (
        <div>
            <List
                students={students}
                selected={selected}
                select={select}
            />
        </div>
    );

};

export default Home;