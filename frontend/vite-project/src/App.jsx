import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App(){
    

  const produto ={
    codigo: 0,
    nome: '',
    marca: ''

  }

  const[btnCadastrar, setBtnCadastrar] = useState(true)
  const[produtos, setProdutos] = useState([]);

  const[objProduto, setobjProduto] = useState(produto)

  useEffect(() => {
    
    fetch("http://localhost:8080/listar") 
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))

  }, []) 

  const aoDigitar = (e) => {
    
    console.log(e.target)
    
    setobjProduto({
      ...objProduto,

      [e.target.name]:e.target.value
    })
  
  }


  const limparFormulario = () => {
    setobjProduto(produto);
    setBtnCadastrar(true) 
  
  //Obter o produto a partir da posição do índice
  const selecionarProduto = (indice) => {
    setobjProduto(produtos[indice]) //Para ter o código, nome e marca do produto
    setBtnCadastrar(false) //Alterar remover ou cancelar a ação pra o cancelamento ficar ocultado
  }

  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar",  { 

      method:'POST',
      body: JSON.stringify(objProduto), 
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }) 
    .then(retorno => retorno.json()) 
    .then(retorno_convertido =>  {

        if(retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem)
        }
        else{
          
          setProdutos([ ...produtos, retorno_convertido ])
          alert('Produto cadastrado com sucesso!')
         
          limparFormulario()
        } 

    })
  }

  const remover = () => {
    fetch("http://localhost:8080/remover" + objProduto.codigo, {

    method:'DELETE',
    headers: {
      'Content-type' : 'application/json',
      'Accept' : 'application/json'
    }

    }).then(retorno => retorno.json())
      .then(retorno_convertido => {
        
        alert(retorno_convertido.mensagem)
        //Precisa fazer uma cópia, alterar e depois remover

        //Cópia vetor de produtos

        let vetorTemp = [...produtos]
        //Saber a posição do vetor para remover
      })
  }

  return (
  <div className="">
 
    <Formulario 
      botao = { btnCadastrar } 
      eventoTeclado = { aoDigitar }
      cadastrar = { cadastrar } 
      objetoProduto = { objProduto }
      cancelar = { limparFormulario }
    />

    <Tabela
      vetor = { produtos } 
      selecionar = { selecionarProduto }
    />
  
  </div>
 
 )

}
}
export default App