
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import { Route, Routes } from 'react-router-dom'
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import { ContextProvider } from "./Components/utils/global.context";


function App() {
  return (

      <div className="App">
        <ContextProvider>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/:id' element={<Detail/>}/>
        </Routes>
        <Footer/>
        </ContextProvider>
      </div>
  );
}

export default App;
