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
  color: var(--first-color);
  z-index: 1;
  opacity: 1;

  @media (min-width: 994px) {
    font-size: 3.5rem;
  }

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
  width: 100%;
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
  padding: 0px 75px;
  align-items: center;
  box-shadow: 0px 1px 5px #252525;
`;

export const Name = styled.h1`
  color: #bbb;
  margin-left: 100px;
  font-size: 3.5rem;
  cursor: pointer;
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
`;
//------------- HOME
export const Home = styled.article`
  height: 800px;
  text-decoration: none;
  width: 100%;
  padding: 80px 120px;
  box-shadow: 0px 1px 5px #252525;
`;

export const divHome = styled.article`
  display: flex;
  align-items: center;
  height: 600px;
  position: relative;
`;

export const TextHome = styled.div`
  position: relative;
  backdrop-filter: blur(2.5px);
  border: 1px lightgray solid;
  border-radius: 15px;
  font-size: 3rem;
  padding: 50px;
  margin-left: 20%;
  width: 40%;
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
`;
export const buttonHome = styled.button`
  margin-top: 50px;
  border-radius: 15px 15px 15px 15px;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 2.5rem;
  cursor: pointer;
  background-color: #151519;
  border-image: linear-gradient(225deg, #00d9ff 0%, #1f1670 100%) 1;
  margin-right: 50px;
  :hover {
    border-image: linear-gradient(225deg, #1f1670 0%, #00d9ff 100%) 1;
    /* transition: all 500ms ease-in-out; */
    transform: scale(1.02);
  }
`;

//------------- ABOUT ME
export const AboutMe = styled.article`
  height: 800px;
  padding: 80px 120px;
  background-color: #151519;
  box-shadow: 0px 1px 8px #2f2f2f;
`;

export const divAboutMe = styled.article`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const textAboutMe = styled.div`
  color: #666;
  font-size: 3rem;
  padding-top: 2rem;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`;

// ------------- MY SKILLS
export const MySkills = styled.article`
  width: 100%;
  height: 800px;
  display: flex;
  padding: 80px 120px; ;
`;

export const divMySkills = styled.div`
  width: 90%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const MySkillsTitle = styled.h1`
  width: 100%;
  font-size: 4rem;
  text-align: center;
  color: #ddd;
  z-index: 10;
`;

export const divDescription = styled.div`
  height: 400px;
  width: 50%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

export const descriptionTitle = styled.h2`
  width: 500px;
  color: #666;
  padding-top: 100px;
  font-size: 3.5rem; ;
`;

export const descriptionText = styled.div`
  width: 600px;
  font-size: 2.5rem;
  margin-top: 30px;
  color: #666;
`;

export const divSkills = styled.div`
  height: 400px;
  width: 49%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  z-index: 3;
`;
export const Card = styled.div`
  width: 150px;
  height: 150px;
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
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  img {
    height: 95px;
    width: 100px;
  }
`;

export const CardTitle = styled.h3`
  width: 150px;
  padding-top: 5px;
  color: #4285f4;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

//------------- My Projects
export const MyProjects = styled.article`
  height: 800px;
  width: 100%;
  padding: 80px 120px;
  box-shadow: 0px 1px 5px #252525;
  background-color: #151519;
  box-shadow: 0px 1px 8px #2f2f2f;
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
  button {
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
  }
  button > a {
    text-decoration: none;
    color: #777;
  }
  button:hover {
    background-color: #333;
    border: 2px solid #000;
  }
`;

export const MyProjectImg = styled.div`
  height: 150px;
  width: 225px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  img {
    margin-top: 5px;
    height: 130px;
    width: 225px;
    border-radius: 10px;
  }
`;

export const MyProjectTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: #ddd;
`;

export const descriptionProject = styled.div`
  font-size: 1.3rem;
  color: #666;
  padding-top: 5px;
`;

//------------- Contact

export const Contact = styled.article`
  width: 100%;
  height: 800px;
  display: flex;
  padding: 80px 120px;
`;

export const divContact = styled.form`
  position: relative;
  background: #151519;
  width: 45%;
  border-radius: 30px;
  height: 600px;
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
`;

export const ContactTitle = styled.h1`
  width: 100%;
  font-size: 4rem;
  text-align: center;
  color: #ddd;
`;

export const FormContact = styled.div`
  height: 450px;
  width: 500px;
  padding-left: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const formInput = styled.input`
  height: 35px;
  width: 400px;
  margin-top: 20px;
  background-color: #333;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #aaa;
  ::placeholder {
    color: lightgray;
  }
`;
