import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({children}) => {
    return (
        <ButtonWrapper whileTap={{scale: .85}}>
            {children}
        </ButtonWrapper>
    )
}

export default Button