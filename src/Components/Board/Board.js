import React from 'react';
import Button from '../Button/Button';
import martellone from './sounds/martellone.mp3';
import patapum from './sounds/patapum.mp3';
import quark from './sounds/quark.mp3';
import sadtrombone from './sounds/sadtrombone.mp3';
import ambulanza from './sounds/ambulanza.mp3';
import milionario from './sounds/milionario.mp3';
import pappagalli from './sounds/pappagalli.mp3';
import aria from './sounds/aria.mp3'

const Board = () => {
    const sounds = [
        {id: 1, name: 'sticazzi', char: 'E', src: martellone},
        {id: 2, name: 'atapum', char: 'P', src: patapum},
        {id: 3, name: 'ad trombone', char: 'S', src: sadtrombone},
        {id: 4, name: 'uark', char: 'Q', src: quark},
        {id: 5, name: 'mbulanza', char:'A', src: ambulanza},
        {id: 6, name: 'ilionario', char: 'M', src: milionario},
        {id: 7, name: 'appagalli', char: 'P', src: pappagalli},
        {id: 8, name: 'ria', char: 'A', src: aria}
    ]
    
    const boardStyle= {
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5%',
        flexWrap: 'wrap'
    }
    const suoni = sounds.map(item => {
        
        return(
            <Button sound={item.src} key={item.id} name={item.name} char={item.char} />
        )
        
    })
    return(
        <div style={boardStyle}>
            {suoni}
        </div>
    )
}

export default Board