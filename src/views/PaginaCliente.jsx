import axios from "axios";
import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import MenuPainel from "../components/MenuPainel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class PaginaCliente extends Component {
    constructor(props) {
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


    render() {
        return (
          <div className="pagina-cliente">                 
                <MenuPainel dadosCliente={this.state.dadosCliente} />
                <Carousel autoPlay={true} showArrows={false} width="90%" >
                    <div>
                        <img class="imagecarousel" src="../assets/1.jpeg"/>
                    </div>
                    <div>
                        <img class="imagecarousel" src="../assets/2.jpeg" />
                    </div>
                    <div>
                        <img class="imagecarousel" src="../assets/3.jpg" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

