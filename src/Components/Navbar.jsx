import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { tema, handleTheme } = useContext(ContextGlobal);
  return (
    <nav className='navegador' style={{background: tema.nav}}>
      <Link></Link>
      <Link to ={'/'}>Principal</Link>
      <Link to ={'/contact'}>Contacto</Link>
      <Link to = {'/favs'}>Favoritos</Link>
      <button onClick={handleTheme} id="theme-switcher">Cambiar tema</button>
    </nav>
  )
}

export default Navbar