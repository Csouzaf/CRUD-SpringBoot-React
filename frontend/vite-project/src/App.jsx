import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App(){

  const[btnCadastrar, setBtnCadastrar] = useState(true)
  const[produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  })

  return (
  <div className="">
    <p>{ JSON.stringify(produtos) }</p>
    <Formulario botao = { btnCadastrar } />
    <Tabela/>
  
  </div>
 
 )

}
export default App