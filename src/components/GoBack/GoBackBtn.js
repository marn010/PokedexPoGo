import { useNavigate } from 'react-router-dom';

import './GoBackBtn.css'

function Goback(){
  const navigate = useNavigate();

  return(
    <>
    <button className='BackBTN' onClick={() => navigate(-1)}>Volver</button>
    </>
  )
}
export default Goback;