import React, { useState} from 'react';
import { Search, Notifications,ArrowDropDown } from '@material-ui/icons';

import { Link } from 'react-router-dom'; 

import './styles.scss';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [ifSearch, setIfSearch] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll);
    }

    return (
        <div className={ isScrolled?'navbar scrolled':'navbar'}>
            <div className='container'>
                <div className='left'>
                    <Link to='/home'>
                        <img src='data:image/png;base64,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'
                            alt='' />
                    </Link>
                    <Link to='/home'>
                        <button>Homepage</button>
                    </Link>
                    <Link to='/series'>
                        <button>Series</button>
                    </Link>
                    <Link to='/movies'>
                        <button>Movies</button>
                    </Link>
                    <Link to='/mylist'>
                        <button>My List</button>
                    </Link>
                    <Link to='/newandpopular'>
                        <button>New and Popular</button>
                    </Link>
                </div>
                <div className='right'>
                    {ifSearch && <input type='search' placeholder='search' /> }
                    <Search className='icon' onClick={()=>setIfSearch(!ifSearch)}/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img src='data:image/png;base64,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'
                        alt='' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <button>Settings</button>
                            <Link to='/login'>
                                <button>Logout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar