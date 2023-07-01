import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg"




const Card = ({ name, username, id }) => {

  

  const dentista = { //definimos un objeto
    id,
    name,
    username
  }

  const addFav = ()=>{
    const dentistas = JSON.parse(localStorage.getItem('odontologos') || '[]')

    const existingDentist = dentistas.find((d) => d.id === dentista.id);
    if (existingDentist) {
        alert(`error, ${dentista.name} el dentista ya se encuentra en la lista de favoritos`)
        return;
    }
   
    dentistas.push(dentista)
    localStorage.setItem('odontologos',JSON.stringify(dentistas))
  }
  console.log('añadiendo un dentista' + ' ' + dentista.id);

  return (
    <div className="card">
        <img className="imagen" src={img} alt="imagen-doctor" />
        <h2><Link to={`/${id}`}>{name}</Link></h2>
        <h3>usuario: {username}</h3>
        <button onClick={addFav} className="favButton">Añadir a favoritos</button>
    </div>
  );
};

export default Card;
