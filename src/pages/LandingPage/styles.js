import styled from 'styled-components';
import img from '../../assets/backGround.png'

export const BackgroundI = styled.div`
position: fixed;
min-width: 100%;
min-height: 100%;
display: inline;
background-image: url('${img}');
background-size: cover;
background-position: center;
`;

export const Mossoro = styled.div`
height:100%;
width:100%;
margin-left:3%;
margin-top:200px;
text-align:center;
color: white;
font-size:70px;
font-family:Arial, Helvetica, sans-serif;


`
export const Span = styled.div`
width:100%;
margin-left:3%;
margin-top:30px;
justify-content: center;
font-style: italic;
color: white;
font-size:18px;
font-family:Arial, Helvetica, sans-serif;
text-align: center;


`
export const ContainerBotton = styled.div`
display: flex;
align-items:center;
width: 100%;
height:100px;
margin-top:120px;
justify-content:space-evenly;

`

