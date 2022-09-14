import React,{useEffect, useState}from 'react';
import * as S from './style';

function Card({img,title}){
return(
    <S.Card>
        <S.CardImg>
            <image src={img}/>
        </S.CardImg>
        <S.CardTitle>
            {title}
        </S.CardTitle>
    </S.Card>
)
}

export default Card;