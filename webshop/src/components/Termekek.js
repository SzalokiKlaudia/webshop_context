
import React from 'react'
import Termek from './Termek'

function Termekek(props) {
   // const {kosarLista,kattKosar} = useContext(WebContext)

  return (
    <>
        {
            props.lista.map((elem,i) => {
                return <Termek kartya={elem} key={i} index={i}/>
            })
        }
    </>
  )
}


export default Termekek