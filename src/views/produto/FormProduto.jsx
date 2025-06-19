import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { notifyError, notifySuccess } from '../../views/util/Util';


export default function FormProduto () {

    const { state } = useLocation();
const [idProduto, setIdProduto] = useState();
useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get("http://localhost:8080/api/produto/" + state.id)
.then((response) => {
               	    	       setIdProduto(response.data.id)
               	    	       setTitulo(response.data.titulo)
               	    	       setCodigo(response.data.codigo)
               	    	       setDescricao(response.data.descricao)
               	    	       setValorUnitario(response.data.valorUnitario)
               	    	       setTempoEntregaMinimo(response.data.tempoEntregaMinimo) 
                               setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
           		})
       		}
   	}, [state])

    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();  
    const [listaCategoria, setListaCategoria] = useState([]);
    const [idCategoria, setIdCategoria] = useState();

    useEffect(() => {

       axios.get("http://localhost:8080/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

   }, [])


    function salvar() {

		let produtoRequest = {
		     titulo: titulo, 
            idCategoria: idCategoria,
		     codigo: codigo,
		     descricao: descricao,
		     valorUnitario: valorUnitario,
		     tempoEntregaMinimo: tempoEntregaMinimo,
             tempoEntregaMaximo:tempoEntregaMaximo
		}
	
        if (idProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
            .then((response) => { notifySuccess('Produto alterado com sucesso.') })
            .catch((error) => { if (error.response.data.errors != undefined) {
       		for (let i = 0; i < error.response.data.errors.length; i++) {
	       		notifyError(error.response.data.errors[i].defaultMessage)
	    	}
	} else {
		notifyError(error.response.data.message)
	}
 })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => { notifySuccess('Produto cadastrado com sucesso.') })
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
        
        <MenuSistema tela={'produto'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idProduto === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idProduto != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}


                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    placeholder="Informe o titulo do produto"
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}
                                
                                />

                                <Form.Input
                                    required
                                    fluid
                                    placeholder="Informe o código do produto"
                                    label='Código do Produto'
                                    value={codigo}
			                        onChange={e => setCodigo(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group> 

                                <Form.Select
	                            required
	                            fluid
	                            tabIndex='3'
                                placeholder='Selecione'
                                label='Categoria'
                                options={listaCategoria}
                                value={idCategoria}
                                onChange={(e,{value}) => {
                                    setIdCategoria(value)
                                }}
                            /> 
                            
                            <Form.TextArea
                                    label='Descrição'
                                    placeholder="Informe a descrição do produto"
                                    maxLength="10000"
                                    value={descricao}
			                        onChange={e => setDescricao(e.target.value)}

                               />
                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    value={valorUnitario}
			                        onChange={e => setValorUnitario(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    placeholder="30"
                                    width={6}
                                    value={tempoEntregaMinimo}
			                        onChange={e => setTempoEntregaMinimo(e.target.value)}

                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    placeholder="40"
                                    width={6}
                                    value={tempoEntregaMaximo}
			                        onChange={e => setTempoEntregaMaximo(e.target.value)}

                                >
                                </Form.Input>
                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                        <Link to={'/list-produto'}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
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