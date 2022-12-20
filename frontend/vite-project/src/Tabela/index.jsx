function Tabela ({ vetor }) {
    return (

       <table className=" container text-left">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody className="text-left ">
               
                   {
                    vetor.map((obj, indice) => (
                        
                        <tr key={ indice }>
                            <td className="p-2">{ indice + 1 }</td>
                            <td>{ obj.nome }</td>
                            <td>{ obj.marca }</td>
                            <td>
                                <button className="bg-green-500 rounded-lg border-2 p-1 text-xs ">Selecionar</button>
                            </td>
                        </tr>
                    ))
                   }
               
            </tbody>

       </table>








    )
}

export default Tabela