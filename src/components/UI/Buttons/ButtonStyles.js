import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonWrapper = styled(motion.button)`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    padding: 8px 20px;
    border-radius: 20px;
    text-transform: uppercase;
    color: var(--primary);
    border: 1px solid var(--primary);
    background-color: var(--secondary);
`