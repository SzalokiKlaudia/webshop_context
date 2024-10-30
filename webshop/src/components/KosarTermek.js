import React, { useContext } from 'react'
import './KosarTermek.css';
import { WebContext } from '../context/WebContext';

function KosarTermek(props) {
    const {torolKosarbol} = useContext(WebContext)
    console.log(props.index)
    
  return (
    <tbody>
        <tr className='sorok'>
            <td>
            <div className='card-img-holder holder'>
        
                 <img className="kosarT card-img" src={`/kepek/${props.elem.termek.picture}`} alt={props.elem.termek.name} /> {/*nem kell hivatkozni a public mappára, automatikusan a gyökér kvtból keresi meg */}
                
            </div>

            </td>
            <td>
                <div>
                    <p>{props.elem.termek.description}</p>
                </div>

            </td>
            <td>
                <div>
                    <p>{props.elem.termek.price}</p>
                </div>

            </td>
            <td>
                <div>
                    <div className='wrapper-szamlalo'>
                        <div>
                        <i className="fa-solid fa-minus"></i>
                        </div>
                        <label htmlFor="cart-label">
                            <input className="input" type="number"value={props.db} />
                        </label>
                        <div>
                        <i className="fa-solid fa-plus"></i>
                        </div>
                        <div>
                        <i className="fa-solid fa-trash" onClick={()=> {
                            torolKosarbol(props.index)
                        }}></i>
                        </div>

                    </div>
                   
                </div>

            </td>
       

        </tr>

    </tbody>
  )
}

export default KosarTermek
