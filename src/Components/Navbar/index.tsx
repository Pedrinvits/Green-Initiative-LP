import * as C from './styles'
import { Logo } from '../../Svgs/Logo/index';
import { Vector } from '../../Svgs/Vector';
import { Link } from 'react-router-dom';
import{ useState } from 'react';
export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
   return (
        <C.Container>
            <C.Logo>
                <Link to = {'/'}><Logo width="92" height="92"/></Link>
            </C.Logo>
            <C.Links>
                <a className='hover' href="/">Services<Vector/></a>
                <a className='hover' href="/">Api<Vector/></a>
                <a  className='hover'href="/">Company<Vector/></a>
                <Link to = {'/Pricing'} className='hover'>Pricing</Link> 
                <Link to = {'/SignUp'}><button>Get started</button></Link> 
            </C.Links>
                <C.HamburgerMenu >
                    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    {isOpen && (
                        <div className="links">
                            <a className='hover' href="/">Services<Vector/></a>
                            <a className='hover' href="/">Api<Vector/></a>
                            <a  className='hover'href="/">Company<Vector/></a>
                            <Link to = {'/Pricing'} className='hover'>Pricing</Link> 
                            <Link to = {'/SignUp'}><button>Get started</button></Link> 
                        </div>
                    )}
                </C.HamburgerMenu>
            
        </C.Container>
   );
}