import React from 'react';
import './App.css';
import { AppContext } from './Store';

const App = () => {
  return (
    <AppContext.Consumer>
      { value => {
        return (
          <div style={{ 
            display: 'flex', 
            width: '100vw', 
            height: '100vh', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column',
            fontFamily: 'Space Mono',
          }}>
            <div style={{ 
              fontSize: '56px',
            }}>
              {value.count}
            </div>
            <br />
            <button 
              onClick={ () => value.changeCount() }
              style={{
                backgroundColor: '#cc9900',
                border: 'none',
                color: '#fff',
                padding: '15px 30px',
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: 'Space Mono',
                borderRadius: '45px'
              }}
            >
              ADD ONE
            </button>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default App;
