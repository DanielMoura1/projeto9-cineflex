import { Link,useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
export default function Horario(props){
    const {ap,setAp,idfilme,setIdfilme} =props 

    
    const { id } = useParams();
    const [sessoes, setSessoes] = useState([]);
    const [sessoes2, setSessoes2] = useState([]);
    const [sessoes22, setSessoes22] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${ap}/showtimes`);
        requisicao.then(resposta2 => {
			setSessoes(resposta2.data); 
            const requisicao2 = axios.get(`  https://mock-api.driven.com.br/api/v5/cineflex/movies/${resposta2.data.id}/showtimes`);
                                        
                                        
            requisicao2.then(resposta3 => {
                setSessoes2(resposta3.data.days);
                setSessoes22(resposta3.data);
                
                
            });
            
		});
        


	}, []);
   
      
    
    
    return (
        <>
         {console.log('oi oi')}
       
       {console.log(sessoes22)}
      
       {sessoes2.map(ses => {
            {console.log('oi2 oi2')}
           {console.log(ses)}
           return(
            
           <div className='hora'>
           <h1>
              { `${ses.weekday}  - ${ses.date} `}
           </h1>
           <div className='cartaz'>
           <Link to={`/Nivel3`}><div onClick={()=> {setIdfilme(ses.showtimes[0].id)}

               

        } className="horario1" ><p>{ses.showtimes[0].name}</p></div> </Link>  <Link to={`/Nivel3`}><div  onClick={()=> {setIdfilme(ses.showtimes[1].id)}} className="horario1">{ses.showtimes[1].name}</div></Link>
           </div>
       </div>

      )})}
      
    <div className='barraDeBaixo' >
        <div className="csscaixa"><img className='imgg' src={sessoes.posterURL}/></div>
        <h1 className="csstexto" >{sessoes22.title}</h1>
    </div>
    
    
     
    </>
    )

}