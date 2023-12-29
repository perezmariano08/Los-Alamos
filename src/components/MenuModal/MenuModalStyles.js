import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalCartStyled = styled(motion.div)`
    height: 100%;
    width: 90%;
    background: var(--secondary);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;

    
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