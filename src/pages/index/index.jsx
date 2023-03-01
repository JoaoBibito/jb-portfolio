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
          <S.SpanHome className="d-400">Olá eu sou o</S.SpanHome>
          <div className="bigName d-300">
            <span>J</span>oão <span>V</span>itor
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
              <a href="#contact">Contato <Phone/></a>
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
        <S.Title className="d-200">
          Sobre
          <span>
            <User /> About
          </span>
        </S.Title>
        </S.divAboutMe>
        <S.containerAboutMe>
          <img
            src={imgProfile}
            alt="Profile"
          />
          <S.textAboutMe>
            Me chamo João Vitor, tenho 21 anos, ingressei no ramo acadêmico em
            2017, estudando técnico de informática. Atualmente sou graduado em
            Análise e Desenvolvimento de Sistemas, atuante no desenvolvimento C#
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
      description:"HTML é uma linguagem de marcação para construir a estrutura de uma página web.",
      image: htmlImg,
    },
    {
      title: "CSS",
      description:
        'CSS é uma linguagem de "folha de estilo" composta por "camadas" que serve para dar estilo a documentos web.',
      image: css,
    },
    {
      title: "ReactJS",
      description:
        "ReactJS é uma biblioteca JavaScript para a criação de interface de usuário(UI ou User Interface) para páginas web.",
      image: reactjsImg,
    },
    {
      title: "Styled Components",
      description:
        "Styled Components é uma biblioteca que permite escrever código CSS dentro do JavaScript, assim aumentando nossa precisão e agilidade.",
      image: styledComponentsImg,
    },
    {
      title: "JavaScript",
      description:
        "O JavaScript é utilizado para controlar o HTML e o CSS, usado para manipular comportamentos na página",
      image: JavaScriptImg,
    },
    {
      title: "Git",
      description:
        "Sites responsivos são aqueles que se adaptam ao tamanho da tela que esta sendo exibida, como computador, celular, tablet e notebook, cada tela respondendo de forma diferente.",
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
        <S.MySkillsTitle className="d-200"
        >
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
          <S.ProjectImg src={netflixImg} alt='Netflix project'/>
          <S.MyProjectTitle>Netflix Clone</S.MyProjectTitle>
          <S.descriptionProject>
            Projeto que visualmente espelha as paginas do Netflix, onde exibe
            listas de filmes e séries separados por gêneros, consumidos de uma
            API.
          </S.descriptionProject>
          <S.ProjectButton>
            <a
              href="https://github.com/JoaoBibito/NetflixClone"
              target="_blank" rel="noopener noreferrer"
            >
              Repositório
            </a>
          </S.ProjectButton>
          <S.ProjectButton>
            <a
              href="https://joaobibito.github.io/NetflixClone/"
              target="_blank" rel="noopener noreferrer"
            >
              Ver página
            </a>
          </S.ProjectButton>
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
      <S.nameFooter>
        © João Vitor Barbosa 2022
      </S.nameFooter>
      <ul>
        <li>
          <Link
            to="#contact"
            style={{
              hover: {Color: "blue"},
            }}
          >
            <p>Email</p> <MdOutlineMail size={20} style={{marginLeft: "8px"}} />
          </Link>
        </li>
        <li>
          <a href="https://github.com/JoaoBibito" target="_blank" rel="noopener noreferrer">
            <p>Github</p> <BsGithub size={20} style={{marginLeft: "8px"}} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joao-vitor-05aa38141/"
            target="_blank" rel="noopener noreferrer"
          >
            <p>Linkedin</p> <BsLinkedin size={20} style={{marginLeft: "8px"}} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/joao.bibito/" target="_blank" rel="noopener noreferrer" >
            <p>Instagram</p> <BsInstagram size={20} style={{marginLeft: "8px"}} />
          </a>
        </li>
      </ul>
    </S.Footer>
  );
}
export function Index (){
  useEffect(()=>{
    document.title="<João DEV/>"
    
  },[])
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
