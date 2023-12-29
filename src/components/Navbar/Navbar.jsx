import React, { useState } from 'react'
import { DividerItems, NavbarContainer, NavbarItem, NavbarList, NavbarStyles, NavbarTopStyles, NavbarTopWrapper, NavbarWrapper, OpenModalMenu } from './NavbarStyles'
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
                        <NavbarItem whileTap={{scale: .9}} target='_blank'>
                            <FaMobileAlt />
                            <span>+54-351345678</span>
                        </NavbarItem>
                        <DividerItems/>
                        <NavbarItem whileTap={{scale: .9}} target='_blank'>
                            <FaRegEnvelope/>
                            <span>losalamosvgb@gmail.com</span>
                        </NavbarItem>
                        <DividerItems/>
                        <NavbarItem whileTap={{scale: .9}} href="https://maps.app.goo.gl/emApg4etmQDJnXBS6" target='_blank'>
                            <FaLocationDot />
                            <span>Villa General Belgrano, Córdoba.</span>
                        </NavbarItem>
                    </NavbarContainer>
                    <NavbarContainer>
                        <NavbarItem whileTap={{scale: .9}} href="https://www.instagram.com/losalamos.vgb" target='_blank'>
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
                    <OpenModalMenu whileTap={{scale: .8}}>
                        <FaBarsStaggered onClick={toggleMenu} className='menu-icon'/>
                    </OpenModalMenu>
                    
                </NavbarWrapper>
            </NavbarStyles>
            {/* Renderizado condicional del modal */}
            <MenuModal isOpen={isOpen} toggle={toggleMenu} />
        </>
        
    )
}

export default Navbar