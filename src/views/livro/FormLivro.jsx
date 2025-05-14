import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import React , {useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react'; 
import { Link,useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema'; 



export default function FormLivro () {



    const { state } = useLocation();
const [idLivro, setIdLivro] = useState();
useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get("http://localhost:8080/api/livro/" + state.id)
.then((response) => {
               	    	       setIdLivro(response.data.id)
               	    	       setNome(response.data.nome)
               	    	       setPaginas(response.data.paginas)
               	    	       setDataDeLançamento(formatarData(response.data.dataDeLançamento))
              	    	                   	    	     
           		})
       		}
   	}, [state])

    const [nome, setNome] = useState();
    const [paginas, setPaginas] = useState();
    const [dataDeLançamento, setDataDeLançamento] = useState();

    function salvar() {

		let livroRequest = {
		     nome: nome,
		     paginas: paginas,
		     dataDeLançamento: dataDeLançamento
		}
        if (idLivro != null) { //Alteração:
            axios.put("http://localhost:8080/api/livro/" + idLivro, livroRequest)
            .then((response) => { console.log('Livro alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alter um livro.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/livro", livroRequest)
            .then((response) => { console.log('Livro cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o livro.') })
        }
 
	}

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }
    
        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }
 
    return (

        <div>

            <MenuSistema tela={'livro'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idLivro === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Livro &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idLivro != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Livro &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100" 
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}/> 
                                

                                <Form.Input
                                    required
                                    fluid
                                    label='Páginas' 
                                    maxLength="100" 
                                        value={paginas}
				                        onChange={e => setPaginas(e.target.value)}>
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data De Lançamento'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataDeLançamento}
                                        onChange={e => setDataDeLançamento(e.target.value)} />
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                        <Link to={'/list-livro'}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                            </Link>
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right' 
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
