import React from 'react';

import './styles.scss';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';


const MyList = () => {
    return (
        <div className='mylist'>
            <Navbar/>
            <div className='top'>
                <h1>My List</h1>
            </div>
            <Featured/>
        </div>
    );
}

export default MyList