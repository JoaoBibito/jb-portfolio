import styled from 'styled-components';

export const Card=styled.div`
    width: 150px;
    height: 150px;
    background-color: #1E1E1E;
    border: 1px solid #1F1F1F;
    box-shadow: 2PX 2PX 8PX #000;
    border-radius: 15px;
    margin: 10px;
    :hover{
        transform: scale(1.1);
        border: 1px solid #222;
        box-shadow: 2PX 2PX 8PX #1D1D1D;
    }
`;

export const CardImg=styled.div`
height: 115px;
width: 120px;
margin-left:auto;
margin-right: auto;
margin-top: 5px;
`;

export const CardTitle=styled.h3`
color: #4285f4;
font-size: 1.5rem;
display: flex;
justify-content: center;
`;