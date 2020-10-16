import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCard from './SimpleCard';

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51Hak7yKMXRXg03lBWb3YlXu029xJwGaQqHpRL1tbclXWKrFGtTCiK0WWjxPaim3aFOewQpKVVPsETpnuikJMIO0K00keEVJINK');



    return (
        <Elements stripe={stripePromise}>
       <SimpleCard></SimpleCard>
      </Elements>
    );
};

export default Payment;