import React from "react";

import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  let dentist = JSON.parse(localStorage.getItem("odontologos"));
  const {tema} = useContext(ContextGlobal)

  // function deleteFromFavs(user){
  //   const someFav = favs.some((fav) =>)

  // }
  // some: true or false
  //   find: elemento del arreglo que cumple la condicion
  //   filter: un arreglo con los elementos que cumplen la condicion
 

  return (
    <>
    <section className="favs" style={{background:tema.home}}> 

      <h1>Lista de odontologos favoritos</h1>
      <div className="card-grid">
      {dentist.map(item => (
          <Card name={item.name} username={item.username} key={item.id} id={item.id}/>
        ))} 
      </div>
      </section>
    </>
  );
};

export default Favs;
