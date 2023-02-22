import styled, {keyframes} from "styled-components";

const moveImage = keyframes`
from {transform:translateY(0px) };
to{transform:translateY(20px)}
`;

export const Title = styled.h2`
  display: block;
  position: relative;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 2rem 0px;
  padding-top: 2.1rem;
  color: white;
  z-index: 1;
  opacity: 1;
  margin-left:auto;
  margin-right: auto;

  span {
    z-index: -1;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    left: 50%;
    right: 50%;
    color: var(--second-color);
    opacity: 0.2;
    font-weight: 800;
    font-size: 2.6rem;

    @media (min-width: 370px) {
      top: -0.8rem;
      font-size: 3rem;
    }

    @media (min-width: 994px) {
      top: -0.8rem;
      font-size: 4.5rem;
    }
  }
`;

export const Container = styled.div`
  
  height: 1000px;
  position: fixed;
  z-index: -1;
`;
//------------- HEADER PAGE
export const Header = styled.header`
  position: fixed;
  z-index: 9999;
  display: flex;
  width: 100%;
  height: 75px;
  background-color: #151519;
  padding: 0px 50px;
  align-items: center;
  box-shadow: 0px 1px 5px #252525;
  @media(max-width: 992px){
    height: 50px;
    padding: 0px 15px;
  }
`;

export const Name = styled.h1`
  color: #bbb;
  margin-left: 100px;
  font-size: 3rem;
  cursor: pointer;
  @media(max-width:1170px) {
    font-size: 2.5rem;
  }
  @media(max-width:992px) {
    font-size: 2.6rem;
    margin-left: 50px;
  }
  @media(max-width:768px) {
    font-size: 2rem;
    margin-left: 50px;
  }
`;

export const HeaderTopics = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 50px;

  ul {
    margin: 20px;
    font-size: 1.5rem;
    color: #bbb;
    cursor: pointer;
    text-decoration: none;
  }
  ul > span > a {
    text-decoration: none;
    color: #bbb;
  }
  ul:hover {
    transform: scale(1.2);
    transition: 0.3s linear;
  }
  @media(max-width:992px) {
    ul{
    font-size: 1.2rem;
    }
  }
  @media(max-width:768px) {
    
    font-size: 1rem;
    margin-right: 10px;
  
  }
`;
//------------- HOME
export const Home = styled.article`
  height: 700px;
  text-decoration: none;
  width: 100%;
  padding: 80px 120px;
  box-shadow: 0px 1px 5px #252525;
  @media(max-width: 1170px){
    padding: 130px 100px;
  }
  @media(max-width: 992px){
    height: 500px;
    padding: 84px 120px;
  }
  @media(max-width: 768px){
    padding: 84px 5px;
  }
`;

export const divHome = styled.article`
  display: flex;
  align-items: center;
  height: 600px;
  position: relative;
  @media(max-width: 1170px){
    height: 500px;
  }
  @media(max-width: 992px){
    height: 350px;
    }
`;

export const TextHome = styled.div`
  position: relative;
  backdrop-filter: blur(2.5px);
  border: 2px lightgray solid;
  border-radius: 15px;
  font-size: 3rem;
  padding: 50px;
  margin-left:15%;
  width: 650px;
  color: white;
  .bigName {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 7rem;
    font-weight: bold;
    background: linear-gradient(to left, #1f1670, #4285f4, #7109e7, #00d9ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-size: 9rem;
    font-weight: bold;
  }
  @media(max-width:1170px) {
    width: 550px;
    margin-left: 20px;
    padding: 50px;
    font-size: 2rem;

    .bigName{
      font-size: 5rem;
    }
    span{
      font-size: 7rem;
    }
  }
  @media(max-width:992px) {
    width: 550px;
    height: 330px;
    margin-left: 20px;
    padding: 50px;
    font-size: 1.5rem;
    .bigName{
      font-size: 5rem;
    }
    span{
      font-size: 7rem;
    }
  }
  @media(max-width: 768px){
    width: 300px;
    height: 240px;
    padding: 30px 20px 10px 30px;
    .bigName{
      font-size: 4rem;
    }
    span{
      font-size: 6rem;
    }
  }
`;

export const ImgHome = styled.div`
  img {
    height: 600px;
    width: 00px;
    animation: ${moveImage} 1.3s infinite alternate-reverse linear;
  }
`;

export const SpanHome = styled.div`
  font-size: 3rem;
  @media(max-width: 768px){
    font-size: 2rem;
  }
`;
export const buttonHome = styled.button`
  border-radius: 15px 15px 15px 15px;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  font-size: 2rem;
  color:white;
  cursor: pointer;
  background-color: #151519;
  border-image: linear-gradient(225deg, #00d9ff 0%, #1f1670 100%) 1;
  margin-right: 50px;
  margin-top: 50px;
  :hover {
    border-image: linear-gradient(225deg, #1f1670 0%, #00d9ff 100%) 1;
    /* transition: all 500ms ease-in-out; */
    transform: scale(1.02);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media(max-width:1170px){
    height: 60px;
    padding: 0px 15px;
  }
  @media(max-width:992px){
    margin-top: 20px;
  }
  @media(max-width:768px){
    height: 40px;
    margin-top: 20px;
    margin-right: 15px;
    font-size: 1.6rem;
  }
`;

//------------- ABOUT ME
export const AboutMe = styled.article`
  height: 700px;
  position: relative;
  width: 100%;
  padding: 80px 120px;
  background-color: #151519;
  box-shadow: 0px 1px 8px #2f2f2f;
  @media (max-width: 992px) {
    padding: 10px 80px;
    height: 500px;
  }
  @media (max-width: 768px) {
    padding: 20px 10px;
    height: 600px;
  }
`;

export const containerAboutMe=styled.div`
  position: relative;
  display: flex;
  width: 850px;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  img{
    width: 300px;
    height: 400px;
    margin-right: 20px;
    border-radius: 15px;
  }
  @media (max-width: 1170px) {
    width: 800px;
  }
  @media (max-width: 992px) {
    width: 600px;
  img{
      width: 250px;
      height: 300px;
      margin-right: 20px;
    }
  }
  @media (max-width: 768px) {
    width: 465px;
    img{
    width: 200px;
    height: 260px;
    margin-right: 20px;
    }
  }
  @media(max-width:510px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      margin-bottom: 20px;
      margin-right: 0px;
    }
  }
  @media (max-width: 376px) {
    width: 300px;
    flex-direction: column;
  }
    `
export const divAboutMe = styled.article`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const textAboutMe = styled.div`
  color: #666;
  max-width: 470px;
  font-size: 29px;
  padding:5px;
  text-align: justify;
  display: inline-flex;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  flex-direction: column;
 
  @media(max-width:1170px){
    font-size: 25px;
  }
  @media (max-width:992px) {
    width: 400px;
    font-size: 25px;
  }
  @media(max-width:768px){
    width: 280px;
    font-size: 15px;
  }
`;

// ------------- MY SKILLS
export const MySkills = styled.article`
  width: 100%;
  height: 700px;
  display: flex;
  padding: 80px 120px; 
  @media(max-width: 992px){
    padding: 10px 30px;
    height: 450px;
  }
  @media(max-width: 768px){
    padding: 20px 20px;
    height: 450px;
  }
  
`;

export const divMySkills = styled.div`
  width: 960px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 1170px){
    width: 800px;
  }
  @media(max-width: 992px){
    width: 750px;
    justify-content: space-around;
  }
`;

export const MySkillsTitle = styled.h1`
  width: 100%;
  font-size: 4rem;
  text-align: center;
  color: #ddd;
  z-index: 10;
  @media(max-width:768px){
    margin-bottom: 50px;
  }
`;

export const divDescription = styled.div`
  height: 200px;
  width: 400px;
  backdrop-filter: blur(2.5px);
  display: flex;
  flex-direction: column;
  z-index: 5;
  @media (max-width: 1170px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const descriptionTitle = styled.h2`
  width: 100%;
  color: #666;
  font-size: 3.5rem; 
  @media(max-width:992px){
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const descriptionText = styled.div`
  width: 100%;
  font-size: 2.5rem;
  margin-top: 30px;
  color: #666;
  @media(max-width:992px){
    font-size: 2.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const divSkills = styled.div`
  height: 330px;
  width: 500px;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  padding: 0px 10px;
  z-index: 3;
  @media(max-width: 1170px){
    width: 400px;
  }
  @media(max-width: 992px){
    height:250px;
  }
  @media(max-width: 768px){
    height:160px;
    width:250px;
  }
`;
export const Card = styled.div`
position: relative;
  width: 130px;
  height: 130px;
  background-color: #1e1e1e;
  border: 1px solid #1f1f1f;
  box-shadow: 2px 2px 8px #000;
  border-radius: 15px;
  transition: 0.5s ease;
  margin: 10px;
  :hover {
    transform: scale(1);
    border: 2px solid #222;
    box-shadow: 2px 2px 8px #1d1d1d;
  }
  @media(max-width:1170px){
    margin: 5px;
    width: 110px;
    height: 110px;
  }
  @media (max-width: 992px) {
    width: 100px;
    height: 100px;
    margin: 3px;
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: 3px;
  }
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  img {
    height: 75px;
    width: 80px;
  }
  @media(max-width:1170px){
    width: 100px;
    height: 75px;
    img{
      height: 70px;
      width: 85px;
    }
  }
  @media(max-width:992px){
    margin-top: 0px;
    img{
      height: 55px;
      width: 65px;
    }
  }
  @media(max-width:768px){
    width: 65px;
    height: 45px;
    margin-top: 0px;
    img{
      height: 40px;
      width: 40px;
    }
  }
`;

export const CardTitle = styled.h3`
  width: 100%;
  text-align: center;
  padding-top: 5px 0px;
  color: #4285f4;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  @media(max-width:1170px){
    font-size:1.2rem;
  }
  @media(max-width:992px){
    font-size:1.1rem;
  }
  @media(max-width:768px){
    font-size:1rem;
  }
`;

//------------- My Projects
export const MyProjects = styled.article`
  height: 700px;
  width: 100%;
  padding: 80px 120px;
  box-shadow: 0px 1px 5px #252525;
  background-color: #151519;
  box-shadow: 0px 1px 8px #2f2f2f;
  @media(max-width: 992px){
    padding: 10px 30px;
    height: 500px;
  }
`;

export const divMyProjects = styled.div`
  height: 500px;
`;

export const MyProjectsTitle = styled.h1`
  width: 100%;
  font-size: 4rem;
  text-align: center;
  color: #ddd;
  margin-bottom: 50px;
`;

export const CardProject = styled.div`
  width: 250px;
  height: 350px;  
  display: flex;
  flex-direction: column;
  background-color: #171717;
  border-radius: 20px;
  padding: 10px;
  transition: 0.3s ease;
  border: 2px solid #4285f4;
  box-shadow: 0px 0px 15px 5px #101010;
  :hover {
    transform: scale(1.03);
    border: 2px solid #779edc;
    box-shadow: 0px 0px 15px 10px #161616;
  }
  :hover > * {
    transition: all 0.3s ease-in-out;
  }
  @media(max-width: 992px){
    height: 300px;
    width: 200px;
    padding: 5px;
  }
`;

export const ProjectImg = styled.img`

    margin-top: 5px;
    height: 130px;
    width: 225px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  
  @media(max-width: 992px){
    width: 180px;
    height: 115px;
    }
`;

export const MyProjectTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: #ddd;
margin-top: 10px;
`;

export const descriptionProject = styled.div`
  font-size: 1.3rem;
  color: #666;
  text-align: justify;
  padding-top: 5px;
  @media(max-width: 992px){
    font-size: 1.1rem;
    }
`;

export const ProjectButton=styled.button`
    width: 210px;
    height: 30px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: #222;
    color: #777;
    font-weight: bold;
    border: 2px solid #111;
  
   a {
    text-decoration: none;
    color: #777;
  }
  :hover {
    background-color: #333;
    border: 2px solid #000;
  }
  @media(max-width: 992px){
    width: 180px;
    height: 25px;
  }
`;
//------------- Contact

export const Contact = styled.article`
  width: 100%;
  height: 700px;
  display: flex;
  padding: 80px 120px;
  @media(max-width: 992px){
    height: 500px;
    padding: 80px 10px;
  }
`;

export const formContact = styled.form`
  position: relative;
  background: #151519;
  width: 400px;
  border-radius: 30px;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
  ::before {
    content: "";
    inset: 0;
    position: absolute;
    z-index: -1;
    background: linear-gradient(225deg, #00d9ff 0%, #1f1670 100%);
    margin: -2px;
    border-radius: 30px;
  }
  @media(max-width: 992px){
    height: 400px;
  }
  @media(max-width: 768px){
    width: 295px;
  }
`;

export const ContactTitle = styled.h1`
  width: 100%;
  font-size: 4rem;
  text-align: center;
  color: #ddd;
`;

export const divContact = styled.div`
  width: 400px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  @media(max-width: 992px){
    margin-top: 0px;
  }
`;

export const formInput = styled.input`
  height: 35px;
  width: 350px;
  margin-top: 20px;
  background-color: #333;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #555;
  ::placeholder {
    color: lightgray;
  }
  @media(max-width: 992px){
    height: 30px;
    font-size: 1.2rem;
  }
  @media(max-width: 768px){
    width: 250px;
  }
`;
export const Footer = styled.article`
  width: 100%;
  height: 75px;
  display: inline-flex;
  background-color: #151519;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 1px 5px #252525;
  padding: 10px 100px;
  ul {
    width: 600px;
    font-size: 1.9rem;
    display: flex;
    color: #ccc;
    align-items: center;
    cursor: pointer;
    list-style: none;
    justify-content: space-evenly;
  }
  li:hover {
    transform: scale(1.1);
  }
  li > a {
    display: flex;
    text-decoration: none;
    color: inherit;
    align-items: center;
  }
  @media(max-width:1170px){
    ul{
      width: 450px;
      font-size: 1.5rem;
    }
  }
  @media(max-width:992px){
    ul{
      width: 370px;
      font-size: .7rem;
    }
  }
`;
export const nameFooter=styled.div`
font-size: 1.5rem;
font-weight: bold;
justify-self: left;
position: absolute;
left: 60px;
color: white;
@media(max-width: 992px){
  font-size: 1rem;
  left:20px
}
`;
