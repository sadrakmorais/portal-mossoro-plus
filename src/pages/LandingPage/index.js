import React from 'react';
import {Link} from 'react-router-dom'



import {  BackgroundI, Mossoro, ContainerBotton, Span} from './styles';
import Button from '../../components/Button';


const LandingPage = () =>{



    return(

        <BackgroundI>
            <Mossoro><h1>MOSSORÓ+</h1></Mossoro>
            <Span>Encontre e divulgue seu evento aqui.</Span>
            <ContainerBotton>
            <Link to='/login'><Button style={{ background: ' #3498DB', width: '250%',height:'90px',fontWeight: '700',fontSize:'30px' }}>Login</Button></Link>
            <Link to='/register'><Button style={{ background: ' #00FA9A', width: '200%',height:'90px',fontWeight: '700',fontSize:'30px' }}>Cadastrar</Button></Link>
            </ContainerBotton>


        </BackgroundI>

    )

}

export default LandingPage

