import {Component} from "react";
import axios from "axios";
import MenuPainel from "../components/MenuPainel";
import { Carousel } from "react-responsive-carousel";

export default class Painel extends Component{
    constructor(){
        super();
        this.state ={
            dadosCliente: "",
        }
        this.obterDadosCliente = this.obterDadosCliente.bind(this);
    }

    async obterDadosCliente(){
        await axios.get("http://10.24.78.52:5000/api/cliente")
        .then((resposta) => {
            this.setState({dadosCliente: resposta.data});
            console.log(resposta.data);
        })
    }
componentDidMount(){
    this.obterDadosCliente();
}

    render(){
        return(
            <div className="pagina-cliente">                 
                <MenuPainel dadosCliente={this.state.dadosCliente} />
                <div class="carousel">
                <Carousel autoPlay={true} showArrows={false} width="30%">
                    <div>
                        <img class="imagecarousel" src="../assets/1.jpg"/>
                    </div>
                    <div>
                        <img class="imagecarousel" src="../assets/2.jpeg" />
                    </div>
                    <div>
                        <img class="imagecarousel" src="../assets/3.jpg" />
                    </div>
                </Carousel>
                </div>
            </div>
        )
    }
}
