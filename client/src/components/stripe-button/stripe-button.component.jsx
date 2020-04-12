import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStipe = price * 100;

  const publishableKey = "pk_test_eEKIfMc7XmZILzhGzy8binrN00ecASugTA";

  const onToken = (token) => {
    axios({
      url: 'payment', 
      method: 'post',
      data: {
        amount:priceForStipe,
        token
      }
    }).then((res) => {
      alert('Payment Successful!')
    }).catch(err => {
      console.log('Payment error: ', JSON.parse(err));
      alert(
        'There was an issue with your payment. Please be sure to use a the provided CC.'
      )
    })
  };
  //can customize StripeCheckout to an incredible level using github repo
  return (
    <StripeCheckout
      label="Pay Now"
      name="eCommerceApp"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStipe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
