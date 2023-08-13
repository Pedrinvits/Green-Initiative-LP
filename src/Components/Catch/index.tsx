import * as C from './styles';
import { Link } from 'react-router-dom';
export const Catch = () => {
   return (
        <C.Container>
           <C.Box>
               <h1>We are 0.5% on all transaction</h1>
               <p>No catch</p>
               <Link to = {'/SignUp'}><button>Get started</button></Link>
           </C.Box>
        </C.Container>
   );
}