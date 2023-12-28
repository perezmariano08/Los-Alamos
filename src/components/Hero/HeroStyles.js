import styled from "styled-components";

export const HeroWrapper = styled.div`
    background-image: url('/batch_DSC_4075.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    height: calc(100vh - 120px);
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 100px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, .8) 0%, transparent 100%);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: .4;
    }

    .hero-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: start;
        justify-content: center;
        text-align: center;
        color: white;
        width: 100%;
        max-width: 1200px;
        z-index: 1;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        z-index: 1;
        color: white;
        text-align: center;
    }

    .hero-logo {
        height: 45px;
    }

    .divider {
        position: relative;
        height: 2px;
        background-color: var(--primary);
        width: 100px;
    }

    p {
        position: relative;
        width: 500px;
        text-align: start;
    }


    @media (max-width: 968px) {
        padding: 0 30px;

        h1 {
            text-align: start;
        }

        .hero-logo {
            display: none;
        }

        p {
            position: relative;
            width: 100%;
            text-align: start;
        }
    }
`