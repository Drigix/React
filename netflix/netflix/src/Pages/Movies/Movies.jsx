import React from 'react';

import './styles.scss';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';


const Movies = () => {
    return (
        <div>
            <Navbar />
            <Featured type={'movies'} />
        </div>
    );
}

export default Movies