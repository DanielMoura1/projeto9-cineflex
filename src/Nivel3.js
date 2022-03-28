import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
import Bola from "./Bola";
import { Link } from "react-router-dom";
export default function Nivel3(props){
    const {idfilme, setIdfilme,conteudo,setConteudo} =props
    const cont = false
    const[filme,setFilme] = useState([]);
    const[filme2,setFilme2] = useState([]);
    const[filme3,setFilme3] = useState([]);
    const[filme4,setFilme4] = useState([]);
    const [confirmar,setConfirmar] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [ids,setIds] = useState([]);
    const [nome,setNome] =useState('');
    const [cpf,setCpf] =useState('');
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idfilme}/seats`);
        requisicao.then(resposta => {
            setFilme(resposta.data.seats)
            setFilme2(resposta.data)
            setFilme3(resposta.data.movie)
            setFilme4(resposta.data.day)
            conteudo.data =resposta.data.day.date
            conteudo.hora =resposta.data.name
            conteudo.filme =resposta.data.movie.title
            setConteudo({...conteudo})
			
		});
	}, []);
    function ok(y,x,id,name){
        if(x == true ){
        if( confirmar[y] ==true){
           
            setConfirmar([...confirmar])
        }else{
            confirmar[y] = true
           
            setConfirmar([...confirmar])
            ids.push(id)
            setIds([...ids])
            console.log('ids')
            console.log(ids)
            conteudo.caideiras.push(name)
            console.log('name')
            console.log(name)
            setConteudo({...conteudo})
        }
    }
}
    function fim(){
            if(cpf!=='' && nome !=='' && ids[0] !== undefined){
                conteudo.nome= nome
                conteudo.cpf = cpf
                setConteudo({...conteudo})
            const requisicao = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, {
                ids: ids,
	            name: nome,
	            cpf: cpf
            });
            
        }

    }

    
    
    return(
        <>
         {console.log('dan2')}
        {console.log(idfilme)}
        {console.log('dan3')}
        {console.log(filme2)}
        <div className='titulo '>
            <h1>Selecione o(S) assentos(S) </h1>
            
        </div>
        <div className="cartaz">
        {filme.map((numeros) => {
            return(
            <>
            
                <div>
                <Bola ids={numeros.id} habilitado={numeros.isAvailable} name={numeros.name} ok={ok} confirmar={confirmar} />
                    
            </div>
            
                            
        </>
        )
    })}
    </div>
    <div className='caixaBola'>
                <div><div className="bolaSelecionado"></div>
                <p className="caixa"> selecionado</p>
                </div>
                <div><div className="bolaDisponivel"></div>
                <p className="caixa"> Disponivel</p>
                </div>
                <div><div className="bolaIndisponivel"></div>
                <p className="caixa"> Indisponivel</p>
                </div>
    </div>
    <div className="titulo2">
        <h1>Nome do comprador</h1>
    </div>
    <input className="botao" type ='text' onChange={(e) => setNome(e.target.value)} value={nome}
    placeholder='Digite seu nome...'
    />
    <div className="titulo2">
        <h1>CPF do comprador</h1>
    </div>
    <input className="botao" type ='number' onChange={(i) => setCpf(i.target.value)} value={cpf}
    placeholder='Digite seu CPF...'/>
     <Link to={`${  ids[0] !== undefined && cpf !=='' && nome !=='' ? '/nivel4' : ''} `}>
    <div><button className="botao2"  onClick={() =>  fim()}> Reservar assentos(s) </button></div>
    </Link>
    <div className='barraDeBaixo' >
    <div  className="csscaixa"><img className='imgg' src={filme3.posterURL}/></div>
         <Div>
            <h1 className="tex">{filme3.title} </h1>
            <h1 > {filme4.date} - {filme2.name}</h1>
        </Div>
    </div>
        </>
    )
    

}
const Div = styled.div`
display:flex;
flex-direction: column;

font-size:20px;

`