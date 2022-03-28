import Pag1 from "./Pag1";
import Imgs from "./Imgs";
import "./style.css";
export default function Inicio(props){
   const {ap,setAp} =props 
    return(
        <>
            <Pag1 />
            <Imgs ap={ap} setAp={setAp} />
        </>
    )
}