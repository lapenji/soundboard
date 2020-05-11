import React from 'react';
import Board from '../Board/Board'

const App = () => {
  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    height: '80vh',
    display: 'grid',
    gridTemplatecClumns: '1fr',
    gridTemplateRows: '0.5fr 1.5fr 0.1fr',
    gridTemplateAreas: '"." "." "."' 
  }
  const h1Style = {
    fontSize: '120px',
    letterSpacing: '-3px'
  }

  return (

    <div style={containerStyle}>
      <h1 style={h1Style}>Sound Board</h1>
      <Board />
    </div>


  );
}

export default App;
