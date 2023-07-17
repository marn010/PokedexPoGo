import './main.css'

export default function(){
    return(
        <div className='PvP'>
            <h2>PvP Page</h2>
            <div className='PvPLigas'>
                <div className='PvPGL'>
                    <h3>Great League</h3>
                    <div className='Pokemon'></div>
                    <div className='Rank'></div>
                    <div className='IV'></div>
                    <div className='CP'></div>
                    <div className='Moves'></div>
                </div>
                <div className='PvPUL'>
                <h3>Ultra League</h3>
                </div>
                <div className='PvPML'>
                <h3>Master League</h3>
                </div>
            </div>
        </div>
    )
}