import {Component} from "react";

export default class Login extends Component{
    render(){
        return(
            <div>
                <input type="text" name="login" id="login"/>
                <input type="password" name="senha" id="senha"/>
                <button>Entrar</button>
            </div>
        )
    }
}
