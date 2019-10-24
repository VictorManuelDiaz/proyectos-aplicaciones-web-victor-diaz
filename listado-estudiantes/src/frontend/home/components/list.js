import React from 'react';
import Item from './item';
import './list.css';

const List = (props) => {

    const { students, selected, select } = props;

    return (
        <div className='list'>
            {
                students.map(student => {
                    return (
                        <Item
                            key={student.idNumber}
                            data={student}
                            selected={selected}
                            select={select}
                        />
                    );
                })
            }
        </div>
    );

};

export default List;