import React from 'react';
import Board from '../Board/Board'

const App = () => {
  const containerStyle = {
    width: '80%',
    margin: '50px auto 0',
    textAlign: 'center',
    height: '80vh',
    display: 'grid',
    gridTemplatecClumns: '1fr',
    gridTemplateRows: '0.5fr 1.5fr',
    gridTemplateAreas: '"." "."' 
  }
  const h1Style = {
    marginTop: '10%'
  }
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Sound Board</h1>
      <Board />
    </div>
  );
}

export default App;
