import { useState } from "react";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App(){

  const[btnCadastrar, setBtnCadastrar] = useState(true)

  return (
  <div className="">

    <Formulario botao = { btnCadastrar } />
    <Tabela/>
  
  </div>
 
 )

}
export default App