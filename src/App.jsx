import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'

const App = () => {
  let nombres = ['Enrique', 'Rodrigo', 'Alberto']
  return (
    <div>
      <img className='logo' src={reactLogo} alt="" />
      {nombres.map(nombre => 
        <div key={nombre}>El nombre es {nombre}</div> )}
    </div>
  )
}

export default App