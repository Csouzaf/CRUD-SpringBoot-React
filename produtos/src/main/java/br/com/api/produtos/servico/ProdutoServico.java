package br.com.api.produtos.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.repositorio.ProdutoRepositorio;

@Service // Instância os objetos futuramente
public class ProdutoServico {
    
    //Ter acesso ao sql, Autowired só pode ser usado com (@Service, @Repository ou @Controller 
    //Injeção de dependências (Dependency Injection - DI) é um tipo de inversão de controle (Inversion of Control - IoC) 
    //que dá nome ao processo de prover instâncias de classes que um objeto precisa para funcionar.
    @Autowired
    private ProdutoRepositorio pr;

    @Autowired
    private RespostaModelo rm;

    public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }

    public ResponseEntity<?> cadastrarAlterar(ProdutoModelo pm, String acao){

        if(pm.getNome().equals("")) {
            rm.setMensagem("O nome do produto é obrigatório");

            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

    
        else if(pm.getMarca().equals("O nome da marca é obrigatório")) {
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_GATEWAY);
        }

        else {
            if(acao.equals("cadastrar")){
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.CREATED);
            }
             else{

            return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.OK);
            }
        }
    } 

        public ResponseEntity<RespostaModelo> remover(long codigo) {
            pr.deleteById(codigo);
            rm.setMensagem("O produto foi removido com sucesso");
            
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
        }
    }
