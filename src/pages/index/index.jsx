import React,{useEffect, useState}from 'react';
import Typcal from 'react-typical';
import * as S from './style';



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
    return(
        <S.Home>
            <S.divHome>
                <S.TextHome>
                    <S.SpanHome>Olá eu sou o</S.SpanHome>
                    <div className='bigName'><span>J</span>oão <span>V</span>itor</div>
                    <Typcal steps={["I'm, a developer in progress ",2000]} loop={Infinity} />
                </S.TextHome>             
                <S.ImgHome>
                    <img src={require("../../assets/developer.png")}/>
                </S.ImgHome>
            </S.divHome>
        </S.Home>
    )
}

export default()=>{
    return(
        <div>
            <Header/>
            <Home/>
        </div>
    )
}