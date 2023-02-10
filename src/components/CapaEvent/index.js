import React from 'react';

import { Container } from './styles';

const CapaEvent = ({ children, ...rest }) =>{

    return(
    <Container {...rest}>{children}</Container>
    )


}


export default CapaEvent
