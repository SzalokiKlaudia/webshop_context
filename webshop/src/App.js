
import './App.css';
import Termekek from './components/Termekek';
import Aside from './components/Aside';
import { useContext } from 'react';
import { WebContext } from './context/WebContext';


function App() {
  const {products,asideClass, KattAsideIkon} = useContext(WebContext)

  //console.log(asideClass)




  return (
  
    <div className="App">
     
    
     
        <nav className="navbar navbar-expand-lg custom">
          <div className="container-fluid">
            <div className="navbar" id="navbarNav">
              <ul className="navbar-nav w-100 d-flex">
                <li className="nav-item flex-grow-2 p-1">
                  <a className="nav-link text-info fs-4" href="#">
                    Termékek
                  </a>
                </li>
                <li className="nav-item flex-grow-2 p-1">
                  <a className="nav-link fs-4" href="#">
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-row-reverse">
              <i
                className="fa-solid fa-cart-shopping fixed-top-right"
                id="cart-icon" onClick={()=> {
                  KattAsideIkon()
                }}
               
              ></i>
            </div>
          </div>
        </nav>
        <header className="App-header">Webshop</header>

      <article>
        <div className="kontener mb-5">
          <div className="galeria row">
            <Termekek  lista={products}/>
          </div>
        </div>
      </article>

      <aside id="kosar-tartalom d-flex" className={asideClass}>
        <Aside />
      </aside>
    </div>

   
  
  );
}

export default App;
