import * as C from './styles'
import { LinkedinLogo } from '../../Svgs/Social/Linkedin';
import { GoogleLogo } from '../../Svgs/Social/Google/index';
import { FacebookLogo } from '../../Svgs/Social/Facebook/index';

export const Sign = () => {
   return (
        <C.Container>
          <C.Box>
               <h1>Welcome!</h1>
               <input type='email' placeholder='Email'></input>
               <input type='password' placeholder='Password'></input>
               <button>Sign Up</button>

               <C.Footer>
                  <LinkedinLogo/>
                  <GoogleLogo/>
                  <FacebookLogo/>
               </C.Footer>
          </C.Box>
          
        </C.Container>
   );
}