import React, {useEffect, useState} from "react";
import Typcal from "react-typical";
import * as S from "./style";
import ScrollReveal from "scrollreveal";
import {DownloadSimple, User, Briefcase, FileCode, Phone} from "phosphor-react";
import {HashLink as Link} from "react-router-hash-link";
import reactjsImg from "../../assets/reactjs.png";
import htmlImg from "../../assets/html5.png";
import css from "../../assets/css.png";
import styledComponentsImg from "../../assets/styledComponentsImg.png";
import JavaScriptImg from "../../assets/JavaScriptImg.png";
import gitImg from "../../assets/gitImg.png";
import netflixImg from "../../assets/netflixProject.png";

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
          <span>Contato</span>
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
            <S.buttonHome>Contato</S.buttonHome>
            <S.buttonHome>Donwload CV</S.buttonHome>
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
        <S.textAboutMe>
          <S.Title>
            Sobre
            <span>
              <User /> About
            </span>
          </S.Title>
          Me chamo João Vitor, tenho 21 anos, ingressei no ramo acadêmico em
          2017, estudando técnico de informática. Atualmente sou graduado em
          Análise e Desenvolvimento de Sistemas, atuante no desenvolvimento C# e
          aprendendo HTML, CSS, JavaScript e ReactJS.
        </S.textAboutMe>
      </S.divAboutMe>
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
        "HTM é uma linguagem de marcação parar construir a estrutura de uma páginas web.",
      image: htmlImg,
    },
    {
      title: "CSS",
      description:
        'CSS é uma linguagem de "folha de estilo" composta por "camadas" que serve para dar etilos a documentos web.',
      image: css,
    },
    {
      title: "ReactJS",
      description:
        "ReactJS é uma biblioteca JavaScrit para a criação de interace de usuário(UI ou User Interface) para páginas web.",
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
        "Sites responsivos são aqueles que se adaptam ao tamaho da tela que esta sendo exibida, como computador, celular, tablet e notebook, cada tela respondendo de forma diferente.",
      image: gitImg,
    },
  ];
  const [selectedSkill, setSelectedSkill] = useState("");
  console.log("renderzou");

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
                  <img src={item.image} />
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
            <img src={netflixImg} />
          </S.MyProjectImg>
          <S.MyProjectTitle>Netflix Clone</S.MyProjectTitle>
          <S.descriptionProject>
            Projeto que visualmente espelha as paginas do Netflix, onde exibe
            listas de filmes e séries separados por gêneros, consumidos de uma
            API.
          </S.descriptionProject>
          <button>
            <a
              href="https://github.com/JoaoBibito/NetflixClone"
              target="_blank"
            >
              Repositório
            </a>
          </button>
          <button>
            <a
              href="https://joaobibito.github.io/NetflixClone/"
              target="_blank"
            >
              Ver página
            </a>
          </button>
        </S.CardProject>
      </S.divMyProjects>
    </S.MyProjects>
  );
}

function Contact() {
  return (
    <S.Contact>
      <S.divContact>
        <S.ContactTitle>
          <S.Title>
            Contato
            <span>
              <Phone /> Contact
            </span>
          </S.Title>
        </S.ContactTitle>
        <S.FormContact>
          <S.formInput placeholder="Seu nome" />
          <S.formInput placeholder="Seu e-mail" />
          <S.formInput
            placeholder="Deixe sua mensagem"
            style={{
              height: "110px",
              display: "flex",
              justifyContent: "start",
              alignContent: "start",
            }}
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
        </S.FormContact>
      </S.divContact>
    </S.Contact>
  );
}

export default () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Contact />
    </div>
  );
};
