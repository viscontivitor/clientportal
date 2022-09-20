import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import {BrowserRouter} from "react-router-dom";
import Css from "./App.css"

export default function App(){
    return(
        <BrowserRouter>
         <Header/>
         <Main/>
         <Footer/> 
        </BrowserRouter>
    )
}