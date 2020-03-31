import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

  const priceForStipe = price * 100

  const publishableKey = 'pk_test_eEKIfMc7XmZILzhGzy8binrN00ecASugTA'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful!')
  }
  //can customize StripeCheckout to an incredible level using github repo
  return (
    <StripeCheckout  
      label="Pay Now"
      name="eCommerceApp"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStipe}
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  )
}

export default StripeCheckoutButton