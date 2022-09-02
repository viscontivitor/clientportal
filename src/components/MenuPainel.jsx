/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




export default function MenuPainel(props){
    return(
        <div>
         Menu Olá,{props.dadosCliente.nome}!<br></br>
         <a className="dropbtn" onClick={() => myFunction()}>Menu</a>
         <ul id="myDropdown" className="dropdown-content">
              <li><a href="/Painel">Painel</a></li>  
             <li><a href="/MeusDados">Meus dados</a></li>
             <li><a href="/MeusEnderecos">Meus endereços</a></li>
             <li><a href="/MinhaCarteira">Minha carteira</a></li>
             {/* <li><a href="/PaginaCliente">Página do cliente</a></li>   */}
         </ul>
        </div>
    )
}






/*export default class MenuPainel extends Component {
    render(){
        return()
    
}*/