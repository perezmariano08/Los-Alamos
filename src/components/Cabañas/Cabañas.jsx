import React from 'react'
import { CabañaInfo, CabañaItem, CabañaStyled, CabañasItems, CabañasStyled, CabañasWrapper, TitleCabañas } from './CabañasStyles'
import Cabaña2_4 from '/cabaña-2-4.jpg'
import Cabaña4_6 from '/cabaña-4-6.jpg'

import { FaPersonSwimming, FaWifi} from "react-icons/fa6";
import { FaSnowflake } from 'react-icons/fa';

const Cabañas = () => {
    return (
        <CabañasStyled>
            <CabañasWrapper>
                <TitleCabañas>
                    <h2>nuestras cabañas</h2>
                    <div className='line-title'></div>    
                </TitleCabañas>
                <CabañaStyled>
                    <img src={Cabaña2_4}/>
                    <CabañaInfo>
                        <h3>Departamento 2-4 personas</h3>
                        <p>La piscina con vistas es una característica destacada de este apartamento. Este apartamento cuenta con una sala de estar, un dormitorio independiente y un baño con ducha y artículos de aseo gratuitos. La cocina se encuentra totalmente equipada, dispone de fogones, nevera, utensilios de cocina y horno.</p>
                        <CabañasItems>
                            <CabañaItem>
                                <FaPersonSwimming className='icono'/>
                                Pileta
                            </CabañaItem>
                            <CabañaItem>
                                <FaWifi className='icono'/>
                                Wi-Fi
                            </CabañaItem>
                            <CabañaItem>
                                <FaSnowflake className='icono'/>
                                Aire Acondicionado
                            </CabañaItem>
                        </CabañasItems>
                    </CabañaInfo>
                </CabañaStyled>
                <CabañaStyled className='cabaña4-6'>
                    
                    <CabañaInfo>
                        <h3>Departamento 4-6 personas</h3>
                        <p>La piscina con vistas es una característica destacada de este apartamento. Este apartamento cuenta con una sala de estar, un dormitorio independiente y un baño con ducha y artículos de aseo gratuitos. La cocina se encuentra totalmente equipada, dispone de fogones, nevera, utensilios de cocina y horno.</p>
                        <CabañasItems>
                            <CabañaItem>
                                <FaPersonSwimming className='icono'/>
                                Pileta
                            </CabañaItem>
                            <CabañaItem>
                                <FaWifi className='icono'/>
                                Wi-Fi
                            </CabañaItem>
                            <CabañaItem>
                                <FaSnowflake className='icono'/>
                                Aire Acondicionado
                            </CabañaItem>
                        </CabañasItems>
                    </CabañaInfo>
                    <img src={Cabaña4_6}/>
                </CabañaStyled>
            </CabañasWrapper>
        </CabañasStyled>
    )
}

export default Cabañas