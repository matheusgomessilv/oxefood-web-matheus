import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import React, {useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { Link,useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema';

export default function FormEntregador () {

    const { state } = useLocation();
const [idEntregador, setIdEntregador] = useState();
useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get("http://localhost:8080/api/entregador/" + state.id)
.then((response) => {
               	    	       setIdEntregador(response.data.id)
               	    	       setNome(response.data.nome)
               	    	       setCpf(response.data.cpf)
               	    	       setDataNascimento(formatarData(response.data.dataNascimento))
               	    	       setFoneCelular(response.data.foneCelular)
               	    	       setFoneFixo(response.data.foneFixo)
                               setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                               setValorFrete(response.data.valorFrete)
                               setEnderecoRua(response.data.enderecoRua)
                               setEnderecoNumero(response.data.enderecoNumero)
                               setEnderecoComplemento(response.data.enderecoComplemento)
                               setEnderecoBairro(response.data.enderecoBairro)
                               setEnderecoCidade(response.data.enderecoCidade)
                               setEnderecoCep(response.data.enderecoCep)
                               setEnderecoUf(response.data.enderecoUf)
                               setAtivo(response.data.ativo)
           		})
       		}
   	}, [state])

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState(); 
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState(); 
    const [valorFrete, setValorFrete] = useState(); 
    const [enderecoRua, setEnderecoRua] = useState(); 
    const [enderecoNumero, setEnderecoNumero] = useState(); 
    const [enderecoComplemento, setEnderecoComplemento] = useState(); 
    const [enderecoBairro, setEnderecoBairro] = useState(); 
    const [enderecoCidade, setEnderecoCidade] = useState(); 
    const [enderecoCep, setEnderecoCep] = useState(); 
    const [enderecoUf, setEnderecoUf] = useState(); 
    const [ativo, setAtivo] = useState (true)

    function salvar() { //Função cria um objeto e coloca na variavel clientRequest(backend)

		let EntregadorRequest = { //Como se fosse o Json (com os dados do cliente)
		     nome: nome,
		     cpf: cpf,
             rg: rg,
		     dataNascimento: dataNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo,
             qtdEntregasRealizadas: qtdEntregasRealizadas,
             valorFrete: valorFrete,
             enderecoRua: enderecoRua,
             enderecoNumero: enderecoNumero,
             enderecoComplemento:enderecoComplemento,
             enderecoBairro:enderecoBairro,
             enderecoCep:enderecoCep,
             enderecoUf:enderecoUf
		}
	
        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8080/api/entregador/" + idEntregador, EntregadorRequest)
            .then((response) => { console.log('Entregador alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alter um Entregador.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/entregador", EntregadorRequest)
            .then((response) => { console.log('Entregador cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o entregador.') })
        }
    }

    function formatarData (dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }
    
        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }
 
    return (

        <div>
            
        <MenuSistema tela={'entregador'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idEntregador === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idEntregador != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}


                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                   width={10}
                                   value={nome}
			                        onChange={e => setNome(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    width={3}
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                    required
                                    mask="999.999.999-99"
                                    value={cpf}
			                        onChange={e => setCpf(e.target.value)}

                                    /> 
                                    
                                </Form.Input>
                               
                                <Form.Input
                                    fluid
                                    label='RG'
                                   width={4}
                                   value={rg}
			                        onChange={e => setRg(e.target.value)}

                                />

                            </Form.Group>
                            <Form.Group>
                            <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={4}>
                                     <InputMask 
                                    mask="99/99/9999" 
                                    maskChar={null}
                                    placeholder="Ex: 20/03/1985"
                                    value={dataNascimento}
			                        onChange={e => setDataNascimento(e.target.value)}

                                    /> 
                                </Form.Input>

                            <Form.Input
                            required
                            fluid
                            label='Fone Celular'
                            width={6}>
                            <InputMask 
                            mask="(99) 9999.9999"
                            value={foneCelular}
		                	onChange={e => setFoneCelular(e.target.value)}

                            /> 
                            </Form.Input>
                            
                            <Form.Input
                            fluid
                            label='Fone Fixo'
                            width={6}>
                            <InputMask 
                            mask="(99) 9999.9999"
                            value={foneFixo}
		                	onChange={e => setFoneFixo(e.target.value)}

                            /> 
                            </Form.Input>

                            <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdEntregasRealizadas}
		                        	onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                    >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                    value={valorFrete}
		                        	onChange={e => setValorFrete(e.target.value)}>
                                </Form.Input>

                                </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={14}
                                         value={enderecoRua}
                                         onChange={e => setEnderecoRua(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={3}
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>
                        
                            <Form.Group>

                            <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={12}
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={13}
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={4}
                                    value={enderecoCep}
                                    onChange={e => setEnderecoCep(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Input
                                    fluid
                                    label='UF'
                                    width={60}
                                    value={enderecoUf}
                                    onChange={e => setEnderecoUf(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={60}
                                    value={enderecoComplemento}
                                    onChange={e => setEnderecoComplemento(e.target.value)}
                                >
                                </Form.Input>


<Form.Group>
<label>Ativo:</label>

          <Form.Radio
            label='sim:'
            value='Sim'
            checked={ativo === true}
            onChange={() => setAtivo(true)}
          />
          <Form.Radio
            label='não'
            value='Não'
            checked={ativo === false}
            onChange={() => setAtivo(false)}
          />

</Form.Group>
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                        <Link to={'/list-cliente'}>

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
