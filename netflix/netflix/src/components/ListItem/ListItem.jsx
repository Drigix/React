import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayArrow, Add, ThumbUpOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

import './styles.scss'


const ListItem = ({ index,title,img,year,category,time,ageLimit,info}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';
    return (
        <div className='listItem'
            style={{left:isHovered&&index*225 + index*5}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={ img} alt='' />
            {!isHovered &&
                <div className='image'>
                <span>{ title}</span>
                </div>
            }
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className='itemInfo'>
                        <div className='icons'>
                            <Link to='/watch'>
                                <PlayArrow className='icon' />
                            </Link>
                            <Add className='icon'/>
                            <ThumbUpOutlined className='icon' />
                            <ThumbUpAltOutlined className='icon'/>
                        </div>
                        <div className='itemInfoTop'>
                            <span>{ time} </span>
                            <span className='limit'>{ ageLimit}</span>
                            <span> { year}</span>
                        </div>
                        <div className='desc'>
                            <span>{ info}</span>
                        </div>
                        <div className='genre'>
                            <span>{category}</span>
                        </div>
                    </div>
                </>
                )}
                
        </div>
    );
}

export default ListItem