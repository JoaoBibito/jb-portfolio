import React,{useEffect, useState}from 'react';
import Typcal from 'react-typical';
import * as S from './style';
import ScrollReveal from 'scrollreveal';
import imgDev from '../../assets/DevIcon.svg';
import { ProjectsCard } from '../../components/ProjectCard/style';
import reactjsImg from '../../assets/reactjs.png';
import CardSkill from '../../components/SkillsCard';
function Header(){
    const nameHeader = "< Joao Bibito />";

return(
    <S.Header>
            <S.Name><a hrfe="/">{nameHeader}</a></S.Name>
            <S.HeaderTopics>
                <ul>
                    <span>Sobre mim</span>
                </ul>
                <ul>
                    <span>Conhecimentos</span>
                </ul>
                <ul>
                    <span>Projetos</span>
                </ul>
                <ul>
                    <span>Contato</span>
                </ul>
            </S.HeaderTopics>
    </S.Header>
)
}

function Home (){

    useEffect(() => {
        ScrollReveal({ reset: true })
    
        ScrollReveal({
          distance: '200px',
          duration: 2000,
          origin: 'top',
          reset: false
        })
    
    
        ScrollReveal().reveal('.d-200', { duration: 1000,delay:150})
        ScrollReveal().reveal('.d-300', { duration: 2000,delay:300})
        ScrollReveal().reveal('.d-400', { duration: 3000,delay:450})
    
      }, [])

    return(
        <S.Home>
            <S.divHome>
                <S.TextHome>
                    <S.SpanHome className='d-400'>Olá eu sou o</S.SpanHome>
                    <div className='bigName d-300' ><span>J</span>oão <span>V</span>itor</div>
                    <Typcal steps={[1000,"I'm, a developer in progress ",2000,"",2000]} loop={Infinity} className='d-200'/>
                </S.TextHome>             
                <S.ImgHome >
                    <img src={imgDev}/>
                </S.ImgHome>
            </S.divHome>
        </S.Home>
    )
}

function AboutMe(){
    
    return(
<S.AboutMe>
    <S.divAboutMe>
        <S.ImgHome/>
        <S.textAboutMe>
        <h1>
            Quem sou eu
        </h1>
        Eu sou o João Vitor, tenho 21 anos de idade, entrei na área de TI em 2017 cursando Técnico em Informática, e atualmente sou 
        formado em Analise e Desenvolvimentos de Sistemas. Hoje atuo como desenvolvedor C# e aprendendo HTML, CSS, JavaScript e ReactJS.
        </S.textAboutMe>
    </S.divAboutMe>
</S.AboutMe>
    )}

function MySkills(){
    const skills=[{title:"HTML",description:"HTM é uma linguagem de marcação parar cntruir a estrutura de uma páginas web.", image:{reactjsImg}},
                {title:"CSS", description:"CSS é uma linguagem de \"folha de estilo\" composta por \"camadas\" que serve para dar etilos a documentos web.",image:{reactjsImg}},
                {title:"ReactJS",description:"ReactJS é uma biblioteca JavaScrit para a criação de interace de usuário(UI ou User Interface) para páginas web.",image:{reactjsImg}}]
    const styledComponent={title:"",description:""}
    return (
        <S.MySkills>
           
            <S.divMySkills>
            <S.MySkillsTitle>
                Competências
            </S.MySkillsTitle>
                <S.divDescription>
                    <S.descriptionTitle>
                        {skills[0].title}
                    </S.descriptionTitle>
                    <S.descriptionText>
                        {skills[0].description}
                    </S.descriptionText>
                </S.divDescription>
                <S.divSkills>
                {skills.map((key,skill)=>(
                    <CardSkill title={skill.title} img={skill.image} key={key}/>
                ))}
                </S.divSkills>
            </S.divMySkills>
        </S.MySkills>
    )
}
function MyProjects(){
    return (
        <S.MyProjects>
            <S.divMyProjects>
                <ProjectsCard/>
            </S.divMyProjects>
        </S.MyProjects>
    )
}

export default()=>{
    
    return(
        <div>
            <Header/>
            <Home/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/>
        </div>
    )
}