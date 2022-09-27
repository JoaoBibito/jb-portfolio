import React,{useEffect, useState,useRef}from 'react';
import Typcal from 'react-typical';
import * as S from './style';
import ScrollReveal from 'scrollreveal';
import imgDev from '../../assets/DevIcon.svg';
import { ProjectsCard } from '../../components/ProjectCard/style';
import CardSkill from '../../components/SkillsCard';

import reactjsImg from '../../assets/reactjs.png';
import htmlImg from '../../assets/html5.png';
import css from '../../assets/css.png';
import styledComponentsImg from '../../assets/styledComponentsImg.png';
import JavaScriptImg from '../../assets/JavaScriptImg.png';
import gitImg from '../../assets/gitImg.png';

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

    const skills=[{title:"HTML",description:"HTM é uma linguagem de marcação parar construir a estrutura de uma páginas web.", image:htmlImg},
                {title:"CSS", description:"CSS é uma linguagem de \"folha de estilo\" composta por \"camadas\" que serve para dar etilos a documentos web.",image:css},
                {title:"ReactJS",description:"ReactJS é uma biblioteca JavaScrit para a criação de interace de usuário(UI ou User Interface) para páginas web.",image:reactjsImg},
                {title:"Styled Components", description:"Styled Components é uma biblioteca que permite escrever código CSS dentro do JavaScript, assim aumentando nossa precisão e agilidade.", image:styledComponentsImg},
                {title:"JavaScript",description:"O JavaScript é utilizado para controlar o HTML e o CSS, usado para manipular comportamentos na página",image:JavaScriptImg},
                {title:"Git" ,description:"Sites responsivos são aqueles que se adaptam ao tamaho da tela que esta sendo exibida, como computador, celular, tablet e notebook, cada tela respondendo de forma diferente.",image:gitImg}]
    
    const [selectedSkill, setSelectedSkill]=useState('');
    
function changeDescription(item){
        if(selectedSkill===''){
            setSelectedSkill(item)
        }
        console.log(item)
    }

    function clearDescription(){
        setSelectedSkill('')
        console.log('item limpo')
    }
   
    return (
        <S.MySkills>           
            <S.divMySkills>
            <S.MySkillsTitle>
                Competências
            </S.MySkillsTitle>
                <S.divDescription>
                    <S.descriptionTitle>
                        {selectedSkill===''?'Passe o Mouse em uma Skill':
                        selectedSkill.title}
                    </S.descriptionTitle>
                    <S.descriptionText>
                    </S.descriptionText>
                </S.divDescription>
                <S.divSkills>
                    {skills.map((item,key)=>{
                      return(
                      <S.Card 
                      onMouseOver={() => changeDescription(item)} 
                      onMouseOut={clearDescription}
                      key={item.title}>
                        <S.CardImg>
                            <img src={item.image}/>
                        </S.CardImg>
                        <S.CardTitle>
                            {item.title}
                        </S.CardTitle>
                    </S.Card>
                    )} )
                    }
                    
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