import React, { useState,useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import { commerce } from '../../../lib/commerce';

import useStyles from './styles';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart,order,onCaptureCheckout,error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});

    const classes = useStyles();

    useEffect(() => {
        const genereteToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                
                setCheckoutToken(token);
            } catch (error) {
                console.log(error);
            }
        }

        genereteToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Confirmation = () => {
        return (
            <div>
                Confirmation
            </div>);
    };

    const Form = () => {
        if (activeStep === 0) {
            return <AddressForm checkoutToken={checkoutToken} next={next}/>
        }
        else {
            console.log(checkoutToken);
            return <PaymentForm
                shippingData={shippingData}
                checkoutToken={checkoutToken}
                backStep={backStep}
                onCaptureCheckout={onCaptureCheckout}
                nextStep={nextStep}
            />
        }
    };
    

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <StepLabel key={step}>
                                {step}
                            </StepLabel>
                            ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
                </Paper>
            </main>
        </>);
}

export default Checkout