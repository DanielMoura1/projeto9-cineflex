
import Pag2 from "./Pag2";
import Horario from "./Horario";
import "./style.css";
export default function Nivel2(props){
    const {ap,setAp,idfilme, setIdfilme} =props 
    return(
        <>
        <Pag2  />
        <Horario ap={ap} setAp={setAp} idfilme={idfilme} setIdfilme={setIdfilme} />
        </>
    )

}