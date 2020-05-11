import React, { useState } from 'react';
import styled from 'styled-components'

const Div = styled.div`
    background-color: whitesmoke;
    height: 100px;
    width: 100px;
    border: 0;
    outline: 0;
    margin: 10px;
    box-shadow: 0px 5px 10px ;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    border-bottom: 4px solid #d9d9d9;
    &:hover {
        box-shadow: 0px 15px 25px -5px;
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
    }
    &:active {
        box-shadow: 0px 4px 8px;
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
    }

`



const Button = ({sound, name, char, }) => {

    const [box, setBox] = useState('5px 5px 5px rgba(0,0,0,0.75)')


    const spanStyle={
        fontSize: '50px'
    }
    const h6Style = {
        fontSize: '8px'
    }
    
    let suono = new Audio(sound);
    const clickHandler = () => {
        suono.play()
        console.log('ciao')
    }
    return(
        <Div onClick={clickHandler}>
            <h6 style={h6Style}><span style={spanStyle}>{char}</span>{name}</h6>
        </Div>
    )
}

export default Button