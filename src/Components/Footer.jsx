import React from 'react'
import logo from "../images/DH.png"
import { ContextGlobal } from './utils/global.context'
import { useContext } from "react";



const Footer = () => {
  const {tema} = useContext(ContextGlobal)

  return (
    <footer className='footer' style={{background:tema.footer}}>
      <div className='redes' >
        <p>CREADO POR</p>
        <a href="https://playground.digitalhouse.com/login"> <img className='icon' src={logo} alt="digital" />  </a>
        </div>
        

    </footer>
  )
}

export default Footer
