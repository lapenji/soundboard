import React from 'react';



const Button = ({sound, name, char}) => {
    const buttonStyle = {
        height: '100px',
        width: '100px',
        border: '1px solid black',
        boxSizing: 'border-box',
        margin: '10px',
        boxShadow: '5px 5px 5px rgba(0,0,0,0.75)',
        cursor: 'pointer',
        backgroundColor: 'whitesmoke'
        
    }
    const spanStyle={
        fontSize: '50px'
    }
    const h6Style = {
        fontSize: '8px'
    }
    
    let suono = new Audio(sound);
    const clickHandler = () => {
        suono.play()
    }
    return(
        <div style={buttonStyle} onClick={clickHandler}>
            <h6 style={h6Style}><span style={spanStyle}>{char}</span>{name}</h6>
        </div>
    )
}

export default Button