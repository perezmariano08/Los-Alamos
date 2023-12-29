import React, { useEffect } from 'react';
import { ModalCartStyled, ModalClose, NavbarHeader, NavbarListResponsive } from './MenuModalStyles';
import { IoClose } from "react-icons/io5";
import LogoMenuModal from "/Los-Alamos-logo.png"
const MenuModal = ({ isOpen, toggle }) => {
    const screenWidthToCloseModal = 968;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > screenWidthToCloseModal && isOpen) {
                toggle();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, toggle, screenWidthToCloseModal]);

    return (
        <ModalCartStyled
            initial={{ opacity: 0, x: '0%' }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 27 }}
        >
            <NavbarHeader>
                <ModalClose whileTap={{scale: .9}}>
                    <IoClose onClick={toggle} className='modal-close'/>
                </ModalClose>
                
                <img src={LogoMenuModal} />
            </NavbarHeader>
            
            <NavbarListResponsive>
                <li><a href="" className='active'>Inicio</a></li>                        
                <li><a href="">Cabañas</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Galeria</a></li>
                <li><a href="">Contacto</a></li>
            </NavbarListResponsive>
        </ModalCartStyled>
    );
};

export default MenuModal;
