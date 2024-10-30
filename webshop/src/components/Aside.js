
import React, { useContext } from 'react'
import { WebContext } from '../context/WebContext'
import './Aside.css'
import KosarTermek from '../components/KosarTermek'

function Aside() {
    const {kosarLista,vegosszeg, osszesDarab} = useContext(WebContext)
    console.log(kosarLista)
    
  return (
    <div className='table-wrapper'>
        <div>
            <h3>A kosár tartalma</h3>
            <p>A kosárban {osszesDarab} db termék van</p>
        </div>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th>
                        <span>Tétel</span>
                    </th>
                    <th>
                        <span>Leírás</span>
                    </th>
                    <th>
                        <span>Ár</span>
                    </th>
                    <th>
                        <span>Db</span>
                    </th>
            

                </tr>
            
            </thead>
            {
                kosarLista.map((elem,index) => {
                    return <KosarTermek elem={elem} key={index} index={index} db={elem.db}/>
                })
            }


    

        
        </table>
        <h3>Végösszeg: {vegosszeg}  Ft</h3>
    </div>

  )
}

export default Aside
