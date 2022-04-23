import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart ,NightsStay} from '@material-ui/icons';
import { Link,useLocation } from 'react-router-dom';

import logo from '../../assets/icon.png'

import useStyles from './styles';

const Navbar = ({ totalItems,nightMode,setNightMode}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color='inherit'>
                        <img src={logo } alt='Commerce.js' height='25px' className={classes.image} />
                        SKLEP
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' &&(
                        <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label='show items' color='inherit'>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart /> 
                                </Badge>
                            </IconButton>
                            <IconButton aria-label='show items' color='inherit'>
                                <NightsStay onClick={()=>setNightMode(!nightMode)}/>
                            </IconButton>
                        </div>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
        );
}

export default Navbar