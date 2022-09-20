import axios from "axios";
import { Component } from "react";
import MenuPainel from "../components/MenuPainel"

export default class MeusDados extends Component{
    constructor() {
        super();
        this.state = {
            dadosCliente: "",
        }

        this.obterDadosCliente = this.obterDadosCliente.bind(this);
    }

    async obterDadosCliente() {
        await axios.get("https://mocki.io/v1/7b73234a-63da-46bb-aed5-21695bc0f381")
            .then((resposta) => {
                this.setState({ dadosCliente: resposta.data });
                console.log(resposta.data);
            })
    }

    componentDidMount() {
        this.obterDadosCliente();
    }

    render(){
        return(
            <>
                <MenuPainel dadosCliente={this.state.dadosCliente}  />
                <div id="meusdadosbox">
                <div id="boxdadoscliente">
                
                <strong> Valor em sua carteira</strong><input class="inputdadoscliente" type="text" />
                <strong> Valor dispendido este mês</strong><input class="inputdadoscliente" type="text" />
                </div>
                
                </div>
                     
            
            
            
            </>
        )
    }
}