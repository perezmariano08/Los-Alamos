import React from 'react'
import { HeroWrapper } from './HeroStyles'
import Logo from '/Los-Alamos-logo-hoja-blanco.png'
import Button from '../UI/Buttons/Button'
import { FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
    return (
        <HeroWrapper>
            <div class="hero-info">
                <div class="title">
                    <img src={Logo} className="hero-logo"/>
                    <h1>¡bienvenidos a complejo los alamos!</h1>
                </div>
                <div class="divider"></div>
                <p>Descubrí el encanto de la naturaleza y la comodidad en nuestro rincón en Villa General Belgrano</p>
                <Button>
                    <FaWhatsapp/>
                    reservá ahora
                </Button>
            </div>
        </HeroWrapper>
    )
}

export default Hero