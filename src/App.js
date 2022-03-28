import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import Barra from "./Barra";
import Pag1 from "./Pag1";
import Inicio from "./Inicio";
import Imgs from "./Imgs";
import Pag2 from "./Pag2";
import Horario from "./Horario";
import Nivel2 from "./Nivel2";
import Nivel3 from "./Nivel3";
import Nivel4 from "./Nivel4";
import "./style.css";
export default  function App() {
    const [ap,setAp] =useState('');
    const [idfilme, setIdfilme] =useState('');
    const [conteudo,setConteudo] =useState({caideiras:[] ,nome:'',cpf:'',data:'',filme:'',hora:''});
    function idfilmes(x){
      setIdfilme(x)
    }
    function imgid(x){
      setAp(x)
    }
    return (
      <div>
        <BrowserRouter>
        
        <Barra/>
        <Routes>
          <Route path="/" element={<Inicio ap={ap} setAp={imgid} />} /> 
          <Route path="/Nivel2" element={<Nivel2 ap={ap} setAp={imgid} idfilme={idfilme} setIdfilme={idfilmes} />} />
          <Route path="/Nivel3" element={<Nivel3  idfilme={idfilme} setIdfilme={idfilmes} conteudo={conteudo} setConteudo={setConteudo}/>} />
          <Route path="/Nivel4" element={<Nivel4   conteudo={conteudo} setConteudo={setConteudo} />} />
        </Routes>
        </BrowserRouter>
      </div>
     
    );
    
  }