import styled,{keyframes}from 'styled-components';



const moveImage=keyframes`
from {transform:translateY(0px) };
to{transform:translateY(20px)}
`;

export const Header =styled.header`
display: flex;
width: 100vw;
height: 75px;
background-color: #1D1D1D;
padding: 0px 75px;
align-items: center;
box-shadow: 0px 1px 5px #252525;
`;

export const Name =styled.h1`
color: #BBB;
margin-left: 100px;
font-size: 3.5rem;
`;

export const HeaderTopics=styled.ul`
display: flex;
flex-direction: row;
margin-left: auto;
margin-right: 50px;

ul{
    margin: 20px;
    font-size: 1.5rem;    
    color: #BBB;
}
`;

export const Home=styled.article`
height: 600px;
width: 100vw;
padding: 80px 120px;
box-shadow: 0px 1px 5px #252525;
`;

export const divHome=styled.article`
display: flex;
justify-content: space-around;
align-items:  center;
height: 400px;
position: relative;
`;

export const TextHome=styled.div`
font-size: 3rem;
width: 30%;
color: white;
    .bigName{
        font-size: 7rem;    
        font-weight: bold;
    }
    span{
        color: #4285f4;
        font-size:10rem;
        font-weight: bold;
    }
`;

export const ImgHome=styled.div`
img{   
    height: 600px;
   width: 600px;
   animation: ${moveImage} 1.3s infinite alternate-reverse linear;
}`;

export const SpanHome=styled.div`
font-size:3rem;`;

export const AboutMe=styled.article`
height: 600px;
width: 100vw;
padding: 80px 120px;
background-color: #1E1E1E;
box-shadow: 0px 1px 8px #2f2f2f;
`;

export const divAboutMe=styled.article`
display: flex;
justify-content: space-around;
align-items:  center;
height: 400px;
position: relative;
`;

export const textAboutMe=styled.div`
color: #666;
font-size: 3rem;
width: 700px;
h1{
    font-size: 4rem;
    font-weight:bold;
    color:#DDD;
    margin-bottom: 30px;
}
`;

export const MySkills=styled.article`
width: 100%;
height:600px;
display: flex;
padding-top:50px; 
`;

export const divMySkills=styled.div`
width: 90%;
height: 500px;
border: 1px solid red;
margin:0 auto;
display: flex;
flex-wrap: wrap;
`;

export const MySkillsTitle=styled.h1`
width:100% ;
height: 100px;
font-size: 4rem;
text-align: center;
padding-top: 30px;
    color:#DDD;
`;

export const divDescription=styled.div`
height: 400px;
width: 50%;
border: 1px solid blue;
`;

export const descriptionTitle=styled.h2`
width: 100px;
margin-left: 100px;
padding-top:100px;
font-size : 3rem;;
`;

export const descriptionText=styled.div`
`;

export const divSkills=styled.div`
height: 400px;
width: 49%;
border: 1px solid yellow;
display: flex;

img{
    height: 100px;
    width:120px;
}
`;

export const MyProjects=styled.article`
height:600px;

background-color: #1E1E1E; ;
`;

export const divMyProjects=styled.div`
height:400px`;
