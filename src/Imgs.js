import { Link ,useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Horario from "./Horario";
import "./style.css";

export default function Imgs(props){
    const {ap,setAp} =props 
   
    const [items, setItems] = useState([]);
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);

    return (
        <>
       

        <div className='espaco2'>
            <div>
               {console.log('aqui')}
               {console.log(items)}
              <Link to={`Nivel2`}>
              <div className='daniel'>
              {items.map(item =>  <div  className='espacoo'><img onClick={() =>   setAp(item.id)}  className='espaco' src={item.posterURL}/></div> )}
              </div>
             </Link>   
            </div>
        </div>
        
        </>
        )
}
