import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data, setData] = useState([]);
  const {tema} = useContext(ContextGlobal)
  
  async function handleFetch() {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    setData(response);
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="home" style={{background:tema.home, color: tema.letras}}>
      <h1>Bienvenidos a la clinica odontologica</h1>
      <div className="card-grid">
        {data?.map((item) => {
          return (
            <Card key={item.id} data={item} id={item.id} name={item.name} username={item.username}/>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
