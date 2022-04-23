import React, { useRef,useState} from 'react';

import { ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons';

import ListItem from '../ListItem/ListItem';
import data from '../../data';

import './styles.scss'


const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [elements, setElements] = useState(data);

    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x-50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    console.log(elements);
    
    return (
        <div className='list'>
            <span className='listTitle'>Continue to watch</span>
            <div className='wrapper'>
                <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick('left')} />
                <div className='container' ref={listRef}>
                    {elements.map((element) => {
            const {id, title, img, time, category, ageLimit, year, info} = element;
                        return <ListItem
                            index={id}
                            title={title}
                            img={img}
                            time={time}
                            category={category}
                            ageLimit={ageLimit}
                            year={year}
                            info={info}
                        />
        })}
                    {/*<ListItem index={0} />*/}
                    {/*<ListItem index={1}/>*/}
                    {/*<ListItem index={2}/>*/}
                    {/*<ListItem index={3}/>*/}
                    {/*<ListItem index={4}/>*/}
                    {/*<ListItem index={5}/>*/}
                    {/*<ListItem index={6}/>*/}
                    {/*<ListItem index={7}/>*/}
                    {/*<ListItem index={8}/>*/}
                    {/*<ListItem index={9}/>*/}
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick('right')}/>
            </div>
        </div>
    );
}

export default List