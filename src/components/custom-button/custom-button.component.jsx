import React from 'react';

// import './custom-button.styles.scss'; //converted to styles components

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;