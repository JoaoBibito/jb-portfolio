import styled from 'styled-components';


export const Header =styled.header`
display: flex;
width: 100vw;
height: 100px;
border: 1px red solid ;
align-items: center;
`;

export const Name =styled.h1`
color: white;
margin-left: 50px;
font-size: 4.5rem;
`;

export const HeaderTopics=styled.ul`
display: flex;
flex-direction: row;
margin-left: auto;
margin-right: 50px;

ul{
    margin: 20px;
    font-size: 1.5rem;    
}
`;

export const Home=styled.article`
height: 80vh;
width: 100vw;
padding: 8vw;

border: 3px solid black;
`;

export const divHome=styled.article`
display: flex;
justify-content: space-around;
align-items:  center;
height: 50vh;
border: 3px solid red;
position: relative;
`;

export const TextHome=styled.div`
font-size: 3rem;
.bigName{
    font-size: 7rem;    
    font-weight: bold;
}
span{
    color: red;
    font-size:10rem;
    font-weight: bold;
}
`;

export const ImgHome=styled.div`
img{   
    height: 300px;
   width: 300px;
}`;

export const SpanHome=styled.div`
font-size:3rem;`;
