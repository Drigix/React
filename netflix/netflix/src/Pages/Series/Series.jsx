import React from 'react';

import './styles.scss';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';


const Series = () => {
    return (
        <div>
            <Navbar />
            <Featured type={'series'} />
        </div>
    );
}

export default Series