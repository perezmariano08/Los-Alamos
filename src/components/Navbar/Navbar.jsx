import React from 'react'
import { NavbarContainer, NavbarItem, NavbarList, NavbarStyles, NavbarTopStyles, NavbarTopWrapper, NavbarWrapper } from './NavbarStyles'
import { FaMobileAlt, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6'
import Logo from '/logo-losAlamos.png'

const Navbar = () => {
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
                </NavbarWrapper>
            </NavbarStyles>
            
        </>
        
    )
}

export default Navbar