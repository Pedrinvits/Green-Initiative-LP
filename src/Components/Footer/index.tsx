import * as C from './styles'
import { Logo } from '../../Svgs/Logo/index';
import { InstagramLogo } from '../../Svgs/Social/Instagram/index';
import { LinkedinLogo } from '../../Svgs/Social/Linkedin/index'
import { TwitterLogo } from '../../Svgs/Social/Twitter/index';
import { Link } from 'react-router-dom';
export const Footer = () => {
   return (
        <C.Container>

            <C.Logo>

                <Link to = {'/'}><Logo width="92" height="92"/></Link>

            </C.Logo>

            <C.Links>
                <C.Infos>
                    <h1>Service</h1>
                    <p>Personal</p>
                    <p>Business</p>
                    <p>Enterprise</p>
                </C.Infos>
                
                <C.Infos>
                    <h1>API</h1>
                    <p>Developer contact</p>
                    <p>Documentation</p>
                </C.Infos>

                <C.Infos>
                    <h1>About us</h1>
                    <p>Careers</p>
                    <p>Investors</p>
                </C.Infos>
            </C.Links>

            <C.Social>
                <InstagramLogo/>
                <LinkedinLogo/>
                <TwitterLogo/>
            </C.Social>
        </C.Container>
   );
}