import React, { useState } from 'react'
import { NavbarContainer, NavbarItem, NavbarList, NavbarStyles, NavbarTopStyles, NavbarTopWrapper, NavbarWrapper } from './NavbarStyles'
import { FaMobileAlt, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot, FaBarsStaggered } from 'react-icons/fa6'
import Logo from '/logo-losAlamos.png'
import MenuModal from '../MenuModal/MenuModal';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavbarTopStyles>
                <NavbarTopWrapper>
                    <NavbarContainer>
                        <NavbarItem>
                            <FaMobileAlt />
                            <span>+54-351345678</span>
                        </NavbarItem>
                        <NavbarItem>
                            <FaRegEnvelope/>
                            <span>losalamosvgb@gmail.com</span>
                        </NavbarItem>
                        <NavbarItem>
                            <FaLocationDot />
                            <span>Villa General Belgrano, Córdoba.</span>
                        </NavbarItem>
                    </NavbarContainer>
                    <NavbarContainer>
                        <NavbarItem>
                            <FaInstagram />
                            <span>losalamos.vgb</span>
                        </NavbarItem>
                    </NavbarContainer>
                </NavbarTopWrapper>
            </NavbarTopStyles>
            <NavbarStyles>
                <NavbarWrapper>
                    <img src={Logo} />
                    <NavbarList>
                        <li><a href="" className='active'>Inicio</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Cabañas</a></li>
                    </NavbarList>
                    <FaBarsStaggered onClick={toggleMenu} className='menu-icon'/>
                </NavbarWrapper>
            </NavbarStyles>
            {/* Renderizado condicional del modal */}
            <MenuModal isOpen={isOpen} toggle={toggleMenu} />
        </>
        
    )
}

export default Navbar