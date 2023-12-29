import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalCartStyled = styled(motion.div)`
    display:flex;
    flex-direction: column;
    align-items: end;
    gap: 40px;
    height: 100%;
    width: 90%;
    background: var(--secondary);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    padding: 30px;

    
`

export const NavbarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    .modal-close {
        font-size: 40px;
        color: white;
    }

    img {
        height: 90%;
    }
`

export const ModalClose = styled(motion.div)`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
`

export const NavbarListResponsive = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: end;
    li a {
        color: var(--primary);
        font-weight: 400;
    }

    li a.active {
        color: var(--primary);
        font-weight: 700;
    }
`

export const ModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: calc(100vw - 450px);
    height: 100vh;
    

    ${({ isHidden }) =>
        !isHidden &&
        css`
        backdrop-filter: blur(4px);
        `}
`;