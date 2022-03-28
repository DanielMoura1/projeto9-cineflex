import "./style.css";
export default function Nivel4(props){
    const {conteudo,setConteudo} =props
    return(
        <>
       <div className='tituloo '>
            <h1>Pedido feito com sucesso!</h1>
        </div>
        
        <h1 className="tela4h1">Filme e sessão</h1>
        <p className="tela4p">{conteudo.filme}</p>
        <p className="tela4p">{conteudo.data} {conteudo.hora}</p>

        <h1 className="tela4h1">Ingressos</h1>
        {conteudo.caideiras.map(cad =>  <p className="tela4p">assento {cad} </p> )}
        

        <h1 className="tela4h1">Comprador</h1>
        <p className="tela4p">Nome: {conteudo.nome} </p>
        <p className="tela4p">CPF: {conteudo.cpf} </p>
        
        <div>
        
            <button className="botao3"> Voltar pra Home </button>
            
        </div>
        
        </>
    )
}