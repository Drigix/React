import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Cart = ({ cart, handleUpdateQty,handleRemoveFromCart,handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => {
        return (
            <>
            <Typography variant='subtitle'>
                    You have no items in shopping cart!
                    <Link to='/' className={classes.link}>
                        add some items!
                    </Link>
            </Typography>
            </>);
    };

    const FilledCart = () => {
        return (
            <> 
                <Grid container spacing={3} className={classes.cartColor}>
                    {cart.line_items?.map((lineItem) => (
                        <Grid item xs={12} sm={4} key={lineItem.id}>
                            <CartItem item={lineItem} onUpdateCartQty={handleUpdateQty} onRemoveFromCart={handleRemoveFromCart}/>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal:{cart.subtotal?.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size='large' type='button' color='secondary' onClick={handleEmptyCart}>
                            Empty Cart
                        </Button>
                        <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' color='primary'>
                            Checkout
                        </Button>
                    </div>
                </div>
            </>);

    };
    if (!cart.line_items) {
        return <h2>Loading...'</h2>;
    }


    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>
                Your Shopping Cart
            </Typography>
            {cart.line_items?.length === 0 ? <EmptyCart /> : <FilledCart />}
            </Container>
         
        );
}

export default Cart