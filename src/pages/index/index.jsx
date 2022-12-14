import React, {useEffect, useState} from "react";
import Typcal from "react-typical";
import * as S from "./style";
import ScrollReveal from "scrollreveal";
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs";
import {MdOutlineMail} from "react-icons/md";
import {HashLink as Link} from "react-router-hash-link";
import {DownloadSimple, User, Briefcase, FileCode, Phone} from "phosphor-react";
import reactjsImg from "../../assets/reactjs.png";
import htmlImg from "../../assets/html5.png";
import css from "../../assets/css.png";
import styledComponentsImg from "../../assets/styledComponentsImg.png";
import JavaScriptImg from "../../assets/JavaScriptImg.png";
import gitImg from "../../assets/gitImg.png";
import netflixImg from "../../assets/netflixProject.png";
import Particle from "../../Components/Particle";
import imgProfile from "../../assets/PicProfile.jpg";
import emailjs from "@emailjs/browser"

function Header() {
  const nameHeader = "< Joao Bibito />";

  return (
    <S.Header>
      <S.Name>{nameHeader} </S.Name>
      <S.HeaderTopics>
        <ul>
          <span>
            <Link to="#aboutMe">Sobre mim</Link>
          </span>
        </ul>
        <ul>
          <span>
            <Link to="#mySkills">Conhecimentos</Link>
          </span>
        </ul>
        <ul>
          <span>
            <Link to="#myProjects">Projetos</Link>
          </span>
        </ul>
        <ul>
          <span>
            <Link to="#contact">Contato</Link>
          </span>
        </ul>
      </S.HeaderTopics>
    </S.Header>
  );
}

function Home() {
  useEffect(() => {
    ScrollReveal({reset: true});

    ScrollReveal({
      distance: "200px",
      duration: 2000,
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".d-200", {duration: 1000, delay: 150});
    ScrollReveal().reveal(".d-300", {duration: 2000, delay: 300});
    ScrollReveal().reveal(".d-400", {duration: 3000, delay: 450});
  }, []);

  return (
    <S.Home id="home">
      <S.divHome>
        <S.TextHome>
          <S.SpanHome className="d-400">Ol?? eu sou o</S.SpanHome>
          <div className="bigName d-300">
            <span>J</span>o??o <span>V</span>itor
          </div>
          <Typcal
            steps={[
              2000,
              "I'm, a developer in progress. ",
              2000,
              "I'm Back-End developer.",
              2000,
              "I'm Front-End developer.",
            ]}
            loop={Infinity}
            className="d-200"
          />
          <>
            <S.buttonHome>
              <a href="#contact">Contato</a>
            </S.buttonHome>
            <S.buttonHome>
              <a href={require("../../assets/CurriculoJoaoVitor.pdf")} download>
                Curriculo <DownloadSimple />
              </a>
            </S.buttonHome>
          </>
        </S.TextHome>
      </S.divHome>
    </S.Home>
  );
}

function AboutMe() {
  return (
    <S.AboutMe id="aboutMe">
      <S.divAboutMe>
        <S.Title>
          Sobre
          <span>
            <User /> About
          </span>
        </S.Title>
        </S.divAboutMe>
        <S.containerAboutMe>
          <img
            src={imgProfile}
            style={{
              width: "300px",
              height: "400px",
              marginRight: "20px",
            }}
            alt="Profile"
          />
          <S.textAboutMe>
            Me chamo Jo??o Vitor, tenho 21 anos, ingressei no ramo acad??mico em
            2017, estudando t??cnico de inform??tica. Atualmente sou graduado em
            An??lise e Desenvolvimento de Sistemas, atuante no desenvolvimento C#
            e aprendendo HTML, CSS, JavaScript e ReactJS.
          </S.textAboutMe>
          </S.containerAboutMe>
    </S.AboutMe>
  );
}

function MySkills() {
  useEffect(() => {
    ScrollReveal({reset: true});

    ScrollReveal({
      distance: "200px",
      duration: 2000,
      origin: "top",
      reset: false,
    });
    ScrollReveal().reveal(".d-200", {
      duration: 1000,
      delay: 200,
      distance: "50px",
    });
    ScrollReveal().reveal(".d-300", {duration: 2000, delay: 350});
    ScrollReveal().reveal(".d-400", {
      duration: 4000,
      delay: 500,
      distance: "100px",
    });
  }, []);

  const skills = [
    {
      title: "HTML",
      description:
        "HTM ?? uma linguagem de marca????o parar construir a estrutura de uma p??ginas web.",
      image: htmlImg,
    },
    {
      title: "CSS",
      description:
        'CSS ?? uma linguagem de "folha de estilo" composta por "camadas" que serve para dar etilos a documentos web.',
      image: css,
    },
    {
      title: "ReactJS",
      description:
        "ReactJS ?? uma biblioteca JavaScrit para a cria????o de interace de usu??rio(UI ou User Interface) para p??ginas web.",
      image: reactjsImg,
    },
    {
      title: "Styled Components",
      description:
        "Styled Components ?? uma biblioteca que permite escrever c??digo CSS dentro do JavaScript, assim aumentando nossa precis??o e agilidade.",
      image: styledComponentsImg,
    },
    {
      title: "JavaScript",
      description:
        "O JavaScript ?? utilizado para controlar o HTML e o CSS, usado para manipular comportamentos na p??gina",
      image: JavaScriptImg,
    },
    {
      title: "Git",
      description:
        "Sites responsivos s??o aqueles que se adaptam ao tamaho da tela que esta sendo exibida, como computador, celular, tablet e notebook, cada tela respondendo de forma diferente.",
      image: gitImg,
    },
  ];
  const [selectedSkill, setSelectedSkill] = useState("");

  function changeDescription(item) {
    setSelectedSkill({title: item.title, description: item.description});
  }
  function clearDescription() {
    setSelectedSkill("");
  }

  return (
    <S.MySkills id="mySkills">
      <S.divMySkills>
        <S.MySkillsTitle className="d-200">
          <S.Title>
            Habilidades
            <span>
              <FileCode /> Skills
            </span>
          </S.Title>
        </S.MySkillsTitle>
        <S.divDescription className="d-300">
          <S.descriptionTitle>
            {selectedSkill === ""
              ? "Passe o mouse em uma Skill"
              : selectedSkill.title}
          </S.descriptionTitle>
          <S.descriptionText>
            {selectedSkill === "" ? "" : selectedSkill.description}
          </S.descriptionText>
        </S.divDescription>
        <S.divSkills className="d-400">
          {skills.map((item, key) => {
            return (
              <S.Card
                onMouseOver={() => changeDescription(item)}
                onMouseOut={clearDescription}
                key={key}
              >
                <S.CardImg>
                  <img src={item.image} alt="Skill"/>
                </S.CardImg>
                <S.CardTitle>{item.title}</S.CardTitle>
              </S.Card>
            );
          })}
        </S.divSkills>
      </S.divMySkills>
    </S.MySkills>
  );
}
function MyProjects() {
  return (
    <S.MyProjects id="myProjects">
      <S.divMyProjects>
        <S.MyProjectsTitle>
          <S.Title>
            Projetos
            <span>
              <Briefcase /> Projects
            </span>
          </S.Title>
        </S.MyProjectsTitle>
        <S.CardProject>
          <S.MyProjectImg>
            <img src={netflixImg} alt='Netflix project'/>
          </S.MyProjectImg>
          <S.MyProjectTitle>Netflix Clone</S.MyProjectTitle>
          <S.descriptionProject>
            Projeto que visualmente espelha as paginas do Netflix, onde exibe
            listas de filmes e s??ries separados por g??neros, consumidos de uma
            API.
          </S.descriptionProject>
          <button>
            <a
              href="https://github.com/JoaoBibito/NetflixClone"
              target="_blank" rel="noreferrer"
            >
              Reposit??rio
            </a>
          </button>
          <button>
            <a
              href="https://joaobibito.github.io/NetflixClone/"
              target="_blank" rel="noreferrer"
            >
              Ver p??gina
            </a>
          </button>
        </S.CardProject>
      </S.divMyProjects>
    </S.MyProjects>
  );
}

function Contact() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  function sendEmail(e){
    e.preventDefault()
    const templateParams={
      from_name: name,
      message:message,
      email:email
    }
    emailjs.send("service_salu4oj","template_t65oiet",templateParams,"RL3f1WSBpqa117VED")
    .then((response)=>{
      setName("")
      setEmail("")
      setMessage("")
    },(error)=>{
      console.log("Error",error)
    })
  }
  return (
    <S.Contact id="contact">
      <S.formContact onSubmit={sendEmail}>
        <S.ContactTitle>
          <S.Title>
            Contato
            <span>
              <Phone /> Contact
            </span>
          </S.Title>
        </S.ContactTitle>
        <S.divContact>
          <S.formInput 
            placeholder="Seu nome"
            value={name}
            required
            onChange={(e)=>setName(e.target.value)} />
          <S.formInput 
            placeholder="Seu e-mail" 
            value={email}
            required
            onChange={(e)=> setEmail(e.target.value)} />
          <S.formInput
            placeholder="Deixe sua mensagem"
            value={message}
            style={{
              height: "110px",
              display: "flex",
              justifyContent: "start",
              alignContent: "start",
            }}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <S.buttonHome
            style={{
              height: "40px",
              fontSize: "1.5rem",
            }}
          >
            Limpar
          </S.buttonHome>
          <S.buttonHome
            style={{
              height: "40px",
              fontSize: "1.5rem",
            }}
          >
            Enviar
          </S.buttonHome>
        </S.divContact>
      </S.formContact>
    </S.Contact>
  );
}

function Footer() {
  return (
    <S.Footer>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          justifySelf: "left",
          position: "absolute",
          left: "100px",
        }}
      >
        ?? Jo??o Vitor Barbosa 2022
      </div>
      <ul>
        <li>
          <Link
            to="#contact"
            style={{
              hover: {Color: "blue"},
            }}
          >
            Email <MdOutlineMail size={25} style={{marginLeft: "8px"}} />
          </Link>
        </li>
        <li>
          <a href="https://github.com/JoaoBibito" target="_blank" rel="noreferrer">
            Github <BsGithub size={25} style={{marginLeft: "8px"}} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joao-vitor-05aa38141/"
            target="_blank" rel="noreferrer"
          >
            Linkedin <BsLinkedin size={25} style={{marginLeft: "8px"}} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/joao.bibito/" target="_blank" rel="noreferrer" >
            Instagram <BsInstagram size={25} style={{marginLeft: "8px"}} />
          </a>
        </li>
      </ul>
    </S.Footer>
  );
}
export function Index (){
  return (
    <div style={{
      width: "100%",
      position:"relative"
    }}>
      <Header />
      <Particle />
      <Home />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
};
