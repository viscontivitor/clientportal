import { Routes, Route } from "react-router-dom";
import Login from "../views/Login";
import Painel from "../views/Painel";
import MeusDados from "../views/MeusDados"
import MeusEnderecos from "../views/MeusEnderecos"
import MinhaCarteira from "../views/MinhaCarteira"
import PaginaCliente from "../views/PaginaCliente"


export default function Main() {
    return (
        <main><Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Painel" element={<Painel/>}></Route>
            <Route path="/MeusDados" element={<MeusDados/>}></Route>
            <Route path="/MeusEnderecos" element={<MeusEnderecos/>}></Route>
            <Route path="/MinhaCarteira" element={<MinhaCarteira/>}></Route>
            <Route path="/PaginaCliente" element={<PaginaCliente/>}></Route>


        </Routes>
    
        </main>
    )
}