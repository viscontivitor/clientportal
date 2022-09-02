import {Component} from "react";
import axios from "axios";
import MenuPainel from "../components/MenuPainel";

export default class MinhaCarteira extends Component{
    constructor() {
        super();
        this.state = {
            dadosCliente: "",
        }
        this.obterDadosCliente = this.obterDadosCliente.bind(this);
    }

    async obterDadosCliente() {
        await axios.get("http://10.24.78.52:5000/api/cliente")
            .then((resposta) => {
                this.setState({ dadosCliente: resposta.data });
            })
    }
    componentDidMount() {
        this.obterDadosCliente();
    }

    render() {
        return (
            <MenuPainel dadosCliente={this.state.dadosCliente} />

        )
    }
}