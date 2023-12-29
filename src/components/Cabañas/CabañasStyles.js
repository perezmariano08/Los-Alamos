import styled from "styled-components";

export const CabañasStyled = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 50px;
    @media (max-width: 968px) {
            padding: 50px 30px;
        }
`

export const CabañasWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1200px;
`

export const TitleCabañas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    h2 {
        font-size: 50px;
        text-transform: uppercase;
    }

    .line-title {
        width: 100%;
        height: 2px;
        background-color: var(--primary);
    }
`

export const CabañaStyled = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
    
    @media (max-width: 968px) {
        flex-direction: column;
        gap: 30px;

        &.cabaña4-6 {
            flex-direction: column-reverse;
        }
    }

    img {
        width: 50%;
        max-width: 575px;
        border-radius: 40px;

        @media (max-width: 968px) {
            width: 100%;
        }
    }
`

export const CabañaInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;
    max-width: 575px;
    @media (max-width: 968px) {
        width: 100%;
    }
`

export const CabañasItems = styled.div`
    display: flex;
    gap: 10px;
`
export const CabañaItem = styled.div`
    padding: 4px 8px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    background-color: var(--terciary);
    border-radius: 10px;



    .icono {
        color: var(--cuartiary);
    }
`