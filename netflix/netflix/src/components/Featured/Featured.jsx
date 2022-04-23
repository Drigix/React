import React from 'react';
import {Button } from '@material-ui/core';
import { PlayArrow,InfoOutlined } from '@material-ui/icons';

import './styles.scss'

const Featured = ({ type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                    <select name='genre' id='genre'>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
                )}
            <img src='https://www.1zoom.me/big2/19/267417-Vefreas.jpg' alt='' />
            <div className='info'>
                <h2>Games of Thrones</h2>
                <span>The best series ever!</span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured