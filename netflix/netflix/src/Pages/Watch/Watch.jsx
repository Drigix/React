import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowBackOutlined } from '@material-ui/icons';

import './styles.scss'

const Watch = () => {
    return (
        <div className='watch'>
            <div className='back'>
                <Link to='/home'>
                    <button><ArrowBackOutlined />
                        Home
                    </button>
                </Link>
            </div>
            <video className='video' autoPlay progress controls src='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'/>
        </div>
    );
}

export default Watch