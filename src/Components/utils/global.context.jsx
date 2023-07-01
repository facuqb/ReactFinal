import { createContext, useState } from "react";

export const initialState = {
  temas: {
    light : {
      nav : '#0079BF',
      home: '#F2F5F8',
      footer: '#091E42',
      letras: '#172B4D',
      contact: '#F2F5F8',
      favs: '#FF5630',
      detals: '#36B37E'
    },
    dark: {
      nav: '#344563',
      home: '#1A2634',
      footer: '#091E42',
      letras: '#EBECF0',
      contact: '#1A2634',
      favs: '#FF5630',
      detals: '#36B37E'
    }
  }
}
export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [tema, setTema] = useState(initialState.temas.light)

  const handleTheme = ()=> {
    setTema((t) => (t === initialState.temas.light ? initialState.temas.dark : initialState.temas.light ) )
  } 
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  return (
    <ContextGlobal.Provider value={{tema, handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
