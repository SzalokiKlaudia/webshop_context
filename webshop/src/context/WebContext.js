
// 2. lépés létrehozunk egy providert ami kezelni fogja  a programozási logikát, és  a providert
//összekötjük a context-el
// 3. lépés körbeöleljük a provide-al azokat a komponenseket amikben használni fogjuk a context adatait
// 4. a körbeölelt komponensekben használjuk a contextet useContextet hook-al

import { createContext, useState } from "react";
import products from '../components/adat.js' 
import Termek from "../components/Termek.js";



// 1. lépés létrehozzuk a context-et createcontext-el
export const WebContext = createContext("")

// 2. lépés létrehozunk egy providert ami kezelni fogja  a programozási logikát, és  a providert
//összekötjük a context-el

export const WebProvider = ({children})=>{
    //console.log(products)
    const [aktivE, setAktivE]= useState(false)
    const [kosarLista, setKosarLista] = useState([])
    //itt állítjuk be az aside class-át

     let asideClass = "aside"
     if(aktivE){
         asideClass += " " + "active"
     }
     else{
        asideClass = "aside"
     }

     

    function KattAsideIkon(){//itt fog kiúszni az aside elem
       //lényegében olyan mint a toggle
       
        if(aktivE){
            setAktivE(false)
            
        }
        else{
            setAktivE(true)
           
        }
    
    }

    function kattKosar(adat){

        const cKosarLista = [...kosarLista]; //csináljunk másolatot a listáról és azt setteljük

        const letezik = cKosarLista.find((elem=> elem.termek.name === adat.name))

        if(letezik){
            letezik.db += 1
        }
        else{
            const objektum = {
                termek: adat,
                db: 1
            }
            cKosarLista.push(objektum)
            
        }
      
          setKosarLista(cKosarLista); //itt frissítjük az eredeti listát a másolattal


    }


        let vegosszeg = 0
        let osszesDarab = 0
        
            kosarLista.forEach(elem => {
                const osszeg = elem.termek.price * elem.db
                osszesDarab += elem.db
                vegosszeg+= osszeg
            //    if(!termeklista.includes(elem.termek)){
            //         //termeklista.push(elem.termek.name)
            //    }
                 
       })

       
  
    //    console.log(termeklista)

    //    for (let i = 0; i < kosarLista.length; i++) {//itt objektumok vannak
    //     const elem = kosarLista[i];
    //     const termekNev = elem.termek.name

    //     if(termeklista.includes(termekNev)){

    //     }
        
    //    }
    

    //   console.log(termekTomb)//itt vannak a termékek nevei
    //   console.log(kosarLista)
  

    function torolKosarbol(index) {
        const cKosarLista = [...kosarLista];

        cKosarLista.splice(index,1)
        
        setKosarLista(cKosarLista)//frissítettük a kosarat

        
    }


    return ( <WebContext.Provider value= {{products, KattAsideIkon,asideClass,kosarLista,kattKosar,vegosszeg,torolKosarbol, osszesDarab}}>
                {children}
    </WebContext.Provider>

    )
}