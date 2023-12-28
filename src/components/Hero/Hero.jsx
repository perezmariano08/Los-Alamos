import React from 'react'
import { HeroWrapper } from './HeroStyles'
import Logo from '/Los-Alamos-logo-hoja-blanco.png'

const Hero = () => {
    return (
        <HeroWrapper>
            <div class="hero-info">
                <div class="title">
                    <img src={Logo} class="hero-logo" alt="" srcset="" />
                    <h1>¡bienvenidos a complejo los alamos!</h1>
                </div>
                <div class="divider"></div>
                <p>Descubrí el encanto de la naturaleza y la comodidad en nuestro rincón en Villa General Belgrano.</p>
            </div>
        </HeroWrapper>
    )
}

export default Hero