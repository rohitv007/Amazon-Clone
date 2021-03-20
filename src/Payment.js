import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement } from '@stripe/react-stripe-js';

function Payment() {

    const [ { user, basket} ] = useStateValue();

    // const stripe = useStripe();
    // const elements = useElements();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                {/* Payment Section - Delivery Address */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Amazon Street</p>
                        <p>XYZ, India</p>
                    </div>
                </div>

                {/* Payment Section - Review Items */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Section - Payment method */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form>
                            <CardElement />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
