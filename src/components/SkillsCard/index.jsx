import React,{useEffect, useState}from 'react';
import * as S from './style';

function Card(props){
return(
    <S.Card >
        <S.CardImg>
            <img src={props.img}/>
        </S.CardImg>
        <S.CardTitle>
            {props.title}
        </S.CardTitle>
    </S.Card>
    )
}

export default Card;