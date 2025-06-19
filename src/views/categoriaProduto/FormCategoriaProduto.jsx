import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { notifyError, notifySuccess } from '../../views/util/Util';



export default function FormCategoriaProduto () {



    const { state } = useLocation();
const [idCategoriaProduto, setIdCategoriaProduto] = useState();
useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get("http://localhost:8080/api/categoriaProduto/" + state.id)
.then((response) => {
               	    	       setIdCategoriaProduto(response.data.id)
               	    	       setDescricao(response.data.descricao)
           		})
       		}
   	}, [state])

    const [descricao, setDescricao] = useState();

    function salvar() {

		let categoriaProdutoRequest = {
		     descricao: descricao,  
		}
        if (idCategoriaProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/categoriaProduto/" + idCategoriaProduto, categoriaProdutoRequest)
            .then((response) => { notifySuccess('Categoria de Produto alterado com sucesso.') })
            .catch((error) => {if (error.response.data.errors != undefined) {
       		for (let i = 0; i < error.response.data.errors.length; i++) {
	       		notifyError(error.response.data.errors[i].defaultMessage)
	    	}
	} else {
		notifyError(error.response.data.message)
	}
 })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/categoriaProduto", categoriaProdutoRequest)
            .then((response) => {notifySuccess('Categoria de Produto cadastrado com sucesso.') })
            .catch((error) => { if (error.response.data.errors != undefined) {
       		for (let i = 0; i < error.response.data.errors.length; i++) {
	       		notifyError(error.response.data.errors[i].defaultMessage)
	    	}
	} else {
		notifyError(error.response.data.message)
	}
 })
        }
 
	}

    return (

        <div>

            <MenuSistema tela={'CategoriaProduto'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idCategoriaProduto === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Categoria do Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idCategoriaProduto != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Categoria do Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'
                                    maxLength="100" 
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}/> 
                            
                            </Form.Group>
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                        <Link to={'/list-categoriaProduto'}>
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
