function Formulario ({ botao, eventoTeclado, cadastrar, objetoProduto, cancelar, removerProduto }) {

    return (
        <form>
           
           <div className="sm:flex sm:justify-center">

                <div className="mb-3 mt-2">

                    <label className="text-xs font-bold mr-1">Nome</label>
                    <input value = {objetoProduto.nome} onChange= { eventoTeclado } type="text" name= "nome" placeholder="Digite o nome do Produto" className=" text-xs px-1 sm:px-8 py-0.3 border-2 rounded-lg sm:text-base"/>
                
                </div>

                <div className="sm:mt-2">   
                    <label className="text-xs font-bold mr-1 sm:ml-3 sm:mr-1 ">Marca</label>
                    <input value = {objetoProduto.marca} onChange= { eventoTeclado } type="text" name="marca" placeholder="Digite o nome da Marca" className=" text-xs px-1 sm:px-8 py-0.3 border-2 rounded-lg sm:text-base"/>
                </div>

            </div>
            

            {
                botao 
                ? 
                
                <div className="flex justify-center">
                     <input className=" mt-3 sm:ml-4 text-xs px-2 py-1 sm:p-3 cursor-pointer bg-sky-400 rounded-lg " type="button" value="Cadastrar" onClick={cadastrar}  />
                </div>
                
                :
                <div className="container mt-3 space-x-2 sm:space-x-4 sm:ml-4 flex justify-center ">
                
                    <input className=" text-xs px-2 py-1 sm:p-3 cursor-pointer bg-yellow-500 rounded-lg" type="button" value="Alterar" />
                    <input className=" text-xs px-2 py-1 sm:p-3 cursor-pointer bg-red-600 rounded-lg" type="button" onClick={ removerProduto } value="Remover" />
                    <input className=" text-xs px-2 py-1 sm:p-3 cursor-pointer bg-slate-500 rounded-lg" type="button" onClick={ cancelar } value="Cancelar" />
                </div>
     
            }

          
        </form>
    )
}
export default Formulario