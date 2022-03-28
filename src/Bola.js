import styled from "styled-components";
import "./style.css";
export default function Bola(props){
    const {name,ok,confirmar,habilitado,ids}=props
    return(
        <>
        {console.log(confirmar[props.name-1])}
        <Div name={name} habilitado={habilitado} confirmar={confirmar} ok={ok} onClick={() =>ok(props.name-1,habilitado,ids,name)}>
        {name}
        </Div>
        
        </>
        
    )
}
const Div = styled.div`
margin-left: 10px;

background: ${props => props.confirmar[props.name-1]  ? 'rgb(141, 215, 207)' :props.habilitado ?'rgb(195, 207, 217)' : 'rgb(251, 225, 146)'};
border-radius: 100px;
width: 30px;
height: 30px;

display: flex;
justify-content: center;
align-items: center;`