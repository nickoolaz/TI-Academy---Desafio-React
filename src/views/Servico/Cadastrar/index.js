import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Form, FormGroup, Input, Label, } from "reactstrap"
import { Container } from "reactstrap"
import { api } from "../../../config";


export const Cadastrar = () => {
    const [servico, setServico]= useState({
        nome: '',
        descricao:''
    });

    const[status, setStatus]=useState({
        type:'',
        message:''
    })

    const valorInput=e=> setServico({
        ...servico,[e.target.name]: e.target.value
    });

    const cadServico = async e => {
        e.preventDefault();
        console.log(servico);

        const headers={
            'Content-Type': 'application/json'
        }
        await axios.post(api + "/servicos", servico,{headers})
        .then((response)=>{
           // console.log(response.data.message);
            if(response.data.erro){
                setStatus({
                    type:'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    type: 'success',
                    message: response.data.message
                })
            }
        })
        .catch(()=>{
            console.log("Erro: Sem conexão com a API.")
        })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Serviço</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-servico" className="btn btn-outline-success btn-sm">
                        Serviços
                    </Link>
                </div>
            </div>
            <hr className="m-1" />
            {status.type === 'error' ? <Alert color="danger"> {status.message}</Alert>:""}
            {status.type === 'success' ? <Alert color="success"> {status.message} </Alert>:""}
            <Form className="p-2" onSubmit={cadServico}>
                <FormGroup className="p-2">
                    <Label> Nome</Label>
                    <Input name="nome" placeholder="Nome do serviço" type="text" 
                    onChance={valorInput}/>
                    
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input name="descricao" placeholder="Descrição do serviço" type="text" 
                onChance={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color="success">
                    Cadastrar
                </Button>
            </Form>
        </Container>

    )
}