import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalCartStyled } from './MenuModalStyles';

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
            {/* Contenido del menú */}
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                {/* ... */}
            </ul>
            <button onClick={toggle}>Cerrar</button>
        </ModalCartStyled>
    );
};

export default MenuModal;
