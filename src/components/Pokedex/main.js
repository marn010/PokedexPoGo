import './pokedex.css'

import Pokemon from './Pokemon/main'

export default function pokedex(){
    return(
        <div className='Pokedex'>
            <h2>Pokedex Page!</h2>
            <Pokemon/>
        </div>
    )
}