import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormCupomDesconto () {



    const { state } = useLocation();
const [idCupomDesconto, setIdCupomDesconto] = useState();
useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get("http://localhost:8080/api/cupomDesconto/" + state.id)
.then((response) => {
               	    	       setIdCupomDesconto(response.data.id)

               	    	       setCodigoDesconto(response.data.codigoDesconto)

               	    	       setPercentualDesconto(response.data.percentualDesconto)

                                setValorDesconto(response.data.valorDesconto)

                              setValorMinimoPedidoPermitido(response.data.valorMinimoPedidoPermitido) 

                                setQuantidadeMaximaUso(response.data.quantidadeMaximaUso)

               	    	       setInicioVigencia(formatarData(response.data.InicioVigencia)) 

                               setFimVigencia(formatarData(response.data.FimVigencia))

           		})
       		}
   	}, [state])

    const [codigoDesconto, setCodigoDesconto] = useState();
    const [percentualDesconto, setPercentualDesconto] = useState();
    const [valorDesconto, setValorDesconto] = useState();
    const [valorMinimoPedidoPermitido, setValorMinimoPedidoPermitido] = useState();
    const [quantidadeMaximaUso, setQuantidadeMaximaUso] = useState();  
    const [inicioVigencia, setInicioVigencia] = useState();
    const [fimVigencia, setFimVigencia] = useState();

    function salvar() {

		let cupomDescontoRequest = {
		     codigoDesconto: codigoDesconto,
		     percentualDesconto: percentualDesconto,
		     valorDesconto: valorDesconto,
		     valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
		     quantidadeMaximaUso: quantidadeMaximaUso, 
             inicioVigencia: inicioVigencia,
		     fimVigencia: fimVigencia
		}
        if (idCupomDesconto != null) { //Alteração:
            axios.put("http://localhost:8080/api/cupomDesconto/" + idCupomDesconto, cupomDescontoRequest)
            .then((response) => { console.log('Cupom de Desconto alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar um Cupom de Desconto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/cupomDesconto", cupomDescontoRequest)
            .then((response) => { console.log('Cupom de Desconto cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o Cupom de Desconto.') })
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

            <MenuSistema tela={'cupomDesconto'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idCupomDesconto === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idCupomDesconto != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código'
                                    maxLength="100" 
                                    value={codigoDesconto}
			                        onChange={e => setCodigoDesconto(e.target.value)}/> 
                                
                                  <Form.Input
                                    required
                                    fluid
                                    label='Percentual Desconto'
                                    maxLength="100"
                                    value={percentualDesconto}
			                        onChange={e => setPercentualDesconto(e.target.value)}/>
                                    
   
                         </Form.Group>
                         
                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Desconto'
                                    maxLength="100"
                                    value={valorDesconto}
			                        onChange={e => setValorDesconto(e.target.value)}/>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Minimo Permitido para o Pedido'
                                    maxLength="100"
                                    value={valorMinimoPedidoPermitido}
			                        onChange={e => setValorMinimoPedidoPermitido(e.target.value)}/>

                                    <Form.Input
                                    required
                                    fluid
                                    label='Quantidade Máxima de Uso por Cliente'
                                    maxLength="100"
                                    value={quantidadeMaximaUso}
			                        onChange={e => setQuantidadeMaximaUso(e.target.value)}/>
                                    
                                    <Form.Input

                                    fluid
                                    label='Inicio da Vigência'
                                    width={6}>
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/2005"
                                        value={inicioVigencia}
                                        onChange={e => setInicioVigencia(e.target.value)} /> 

            </Form.Input>
                                    <Form.Input
                                    fluid
                                    label='Fim da Vigência'
                                    width={6}>
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 18/03/2005"
                                        value={fimVigencia}
                                        onChange={e => setFimVigencia(e.target.value)} /> 

                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                        <Link to={'/list-cupomDesconto'}>
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
